import React, { useCallback, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Input from "../../shared/Input";
import Modal from "../../shared/Modal";
import {
  VALIDATOR_MIN_LENGTH,
  VALIDATOR_MAX_LENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_PHONE
} from "../../../utils/validators";

type AcceptPrivacyState = boolean;

type ShowPrivacyState = boolean;

type FormState = {
  inputs: {
    [prop: string]: {
      value: string;
      isValid: boolean;
    };
  };
  isValid: boolean;
};

type FormAction = {
  type: "INPUT_CHANGE" | "INPUT_RESET";
  inputId?: string;
  value?: string;
  isValid?: boolean;
};

const defaultFormState = {
  inputs: {
    name: {
      value: "",
      isValid: false
    },
    email: {
      value: "",
      isValid: false
    },
    phone: {
      value: "",
      isValid: false
    },
    message: {
      value: "",
      isValid: false
    }
  },
  isValid: false
};

const formReducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid! && action.isValid!;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId!]: { value: action.value!, isValid: action.isValid! }
        },
        isValid: formIsValid
      };
    case "INPUT_RESET":
      return defaultFormState;
    default:
      return state;
  }
};

const ContactForm: React.FC = () => {
  const [acceptPrivacyState, setAcceptPrivacyState] = useState<AcceptPrivacyState>(false);
  const [showPrivacyState, setShowPrivacyState] = useState<ShowPrivacyState>(false);
  const [formState, dispatch] = useReducer<React.Reducer<FormState, FormAction>>(formReducer, defaultFormState);

  const inputHandler = useCallback((id: string, value: string, isValid: boolean) => {
    dispatch({ type: "INPUT_CHANGE", inputId: id, value: value, isValid: isValid });
  }, []);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    (async () => {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3001/send",
        data: {
          name: formState.inputs.name.value.trim(),
          email: formState.inputs.email.value.trim(),
          phone: formState.inputs.phone.value.trim(),
          privacy: acceptPrivacyState ? "akzeptiert" : "widersprochen",
          message: formState.inputs.message.value.trim().replace(/\r\n|\r|\n/g, "<br />")
        }
      });

      if (response.status >= 200 && response.status < 300) {
        // TODO: success handling (show a modal with a preview or something like that).
        console.log("Message successfully sent.", response);
        // TODO: reset the form after successfully submit.
        resetFormHandler();
      } else {
        // TODO: Error handling.
        console.log("Message failed to send.", response);
      }
    })();
  };

  const resetFormHandler = () => {
    dispatch({ type: "INPUT_RESET" });
  };

  const privacyHandler = () => {
    setAcceptPrivacyState(!acceptPrivacyState);
  };

  const openPrivacyHandler = () => {
    setShowPrivacyState(true);
  };

  const closePrivacyHandler = () => {
    setShowPrivacyState(false);
  };

  return (
    <>
      <Modal show={showPrivacyState} onCancel={closePrivacyHandler} header="Bestimmungen zur Nutzung Deiner Daten">
        <p>
          Wenn Du die im Kontaktformular eingegebenen Daten durch Klick auf den Button "In Kontakt treten" übersendest,
          erklärst Du dich damit einverstanden, dass ich Deine Angaben für die Beantwortung Deiner Anfrage bzw.
          Kontaktaufnahme verwende.
        </p>
        <p>
          Eine Weitergabe an Dritte findet grundsätzlich nicht statt, es sei denn geltende Datenschutzvorschriften
          rechtfertigen eine Übertragung oder ich dazu gesetzlich verpflichtet bin.
        </p>
        <p>
          Du kannst Deine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Im Falle des Widerrufs
          werden Deine Daten umgehend gelöscht. Deine Daten werden ansonsten ebenfalls gelöscht, wenn ich Deine Anfrage
          bearbeitet habe oder der Zweck der Speicherung entfallen ist. Du kannst Dich jederzeit über die Deiner Person
          gespeicherten Daten informieren. Weitere Informationen zum Datenschutz finden Du auch in der{" "}
          <Link to="/datenschutz">Datenschutzerklärung</Link> dieser Webseite.
        </p>
      </Modal>
      <form onSubmit={submitHandler} method="POST">
        <Input
          type="text"
          id="name"
          label="Dein Name"
          validators={[VALIDATOR_MIN_LENGTH(3), VALIDATOR_MAX_LENGTH(128)]}
          onInput={inputHandler}
          errorText="Bitte einen Namen angeben unter dem ich Dich ansprechen kann."
        />

        <Input
          type="email"
          id="email"
          label="Deine E-Mail-Adresse"
          validators={[VALIDATOR_EMAIL()]}
          onInput={inputHandler}
          errorText="Bitte eine gültige E-Mail angeben, damit ich antworten kann."
        />

        <Input
          type="phone"
          id="phone"
          label="Deine Telefonnummer (optional)"
          validators={[VALIDATOR_PHONE()]}
          onInput={inputHandler}
          errorText="Bitte eine gültige Telefonnummer angeben oder komplett leer lassen."
        />

        <Input
          type="textarea"
          id="message"
          label="Dein Begehren (Sollte ein Rückruf, anstatt einer Antwortmail, gewünscht sein, dann bitte hier mit angeben.)"
          validators={[VALIDATOR_MIN_LENGTH(30), VALIDATOR_MAX_LENGTH(10240)]}
          onInput={inputHandler}
          errorText="Ich brauche eine möglichst erklärende Nachricht von Dir, damit ich auch konkret darauf eingehen kann. Diese sollte aber nicht viel mehr als 10.000 Zeichen haben."
        />

        <div className="privacy">
          <input type="checkbox" id="privacy" name="privacy" onChange={privacyHandler} />
          <div className="privacy__text">
            Ich bin mit der Verwendung meiner Daten gemäß der{" "}
            <span className="anchor" onClick={openPrivacyHandler}>
              Datenschutzbestimmungen
            </span>{" "}
            ausdrücklich einverstanden.
          </div>
        </div>

        <input
          className="btn btn-primary-outline"
          type="submit"
          value="In Kontakt treten"
          disabled={!formState.isValid || !acceptPrivacyState}
        />
      </form>
    </>
  );
};

export default ContactForm;
