import React, { useCallback, useReducer, useState, useRef } from "react";

import PrivacyModal from "./PrivacyModal";
import ResponseModal from "./ResponseModal";
import Input from "../../shared/Input";
import {
  VALIDATOR_MIN_LENGTH,
  VALIDATOR_MAX_LENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_PHONE
} from "../../../utils/validators";
import Spinner from "../../shared/Spinner";

interface ResponseState {
  showModal: boolean;
  type: "SUCCESS" | "ERROR";
  mailData: {
    name: string;
    email: string;
    phone: string;
    privacy: string;
    message: string;
  };
  errorMsg?: string;
}

interface ResponseData {
  message: string;
  createdContact: {
    name: string;
    email: string;
    phone: string;
    privacy: string;
    message: string;
  };
}

interface FormState {
  inputs: {
    [prop: string]: {
      value: string;
      isValid: boolean;
    };
  };
  isValid: boolean;
}

interface FormAction {
  type: "INPUT_CHANGE";
  inputId?: string;
  value?: string;
  isValid?: boolean;
}

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

const defaultMailData = {
  name: "",
  email: "",
  phone: "",
  privacy: "",
  message: ""
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
    default:
      return state;
  }
};

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sendCopyState, setSendCopyState] = useState(true);
  const [acceptPrivacyState, setAcceptPrivacyState] = useState(false);
  const [showPrivacyState, setShowPrivacyState] = useState(false);
  const [sendingState, setSendingState] = useState(false);
  const [responseState, setResponseState] = useState<ResponseState>({
    showModal: false,
    type: "SUCCESS",
    mailData: defaultMailData
  });
  const [formState, dispatch] = useReducer<React.Reducer<FormState, FormAction>>(formReducer, defaultFormState);

  const inputHandler = useCallback((id: string, value: string, isValid: boolean) => {
    dispatch({ type: "INPUT_CHANGE", inputId: id, value: value, isValid: isValid });
  }, []);

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSendingState(true);

    let response: Response;
    let responseData: ResponseData = { message: "", createdContact: defaultMailData };
    try {
      // response = await fetch("http://localhost:3991/contact/send", {
      response = await fetch("https://api.its-boehm.de/contact/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formState.inputs.name.value.trim(),
          email: formState.inputs.email.value.trim(),
          phone: formState.inputs.phone.value.trim(),
          sendCopy: sendCopyState,
          privacy: acceptPrivacyState ? "akzeptiert" : "widersprochen",
          message: formState.inputs.message.value.trim().replace(/\r\n|\r|\n/g, "<br />")
        })
      });

      responseData = await response.json();

      setResponseState({
        showModal: true,
        type: "SUCCESS",
        mailData: responseData.createdContact
      });

      // TODO: reset the form after successfully submit.
      form.current?.reset();
    } catch (error) {
      setResponseState({
        showModal: true,
        type: "ERROR",
        mailData: responseData.createdContact,
        errorMsg: responseData.message
      });
    }

    setSendingState(false);
  };

  const sendCopyHandler = () => {
    setSendCopyState(!sendCopyState);
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

  const closeResponseModalHandler = () => {
    setResponseState({ showModal: false, type: responseState.type, mailData: responseState.mailData });
  };

  const handleReset = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    form.current?.reset();
  };

  return (
    <form ref={form} onSubmit={submitHandler} method="POST" onReset={handleReset}>
      {sendingState && <Spinner preload={sendingState} />}
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
      <div className="switch">
        <input type="checkbox" id="send-copy" name="send-copy" onChange={sendCopyHandler} checked={sendCopyState} />
        <div className="switch__text">Ich möchte eine Kopie der E-Mail erhalten.</div>
      </div>
      <div className="switch">
        <input type="checkbox" id="privacy" name="privacy" onChange={privacyHandler} checked={acceptPrivacyState} />
        <div className="switch__text">
          Ich bin mit der Verwendung meiner Daten gemäß der{" "}
          <span className="anchor" onClick={openPrivacyHandler}>
            Datenschutzbestimmungen
          </span>{" "}
          ausdrücklich einverstanden.
        </div>
      </div>
      <PrivacyModal show={showPrivacyState} onCancel={closePrivacyHandler} />
      <ResponseModal
        show={responseState.showModal}
        onCancel={closeResponseModalHandler}
        type={responseState.type}
        mailData={responseState.mailData}
      />
      <input
        className="btn btn-primary-outline"
        type="submit"
        value="In Kontakt treten"
        disabled={!formState.isValid || !acceptPrivacyState}
      />
    </form>
  );
};

export default ContactForm;
