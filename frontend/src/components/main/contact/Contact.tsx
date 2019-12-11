import React, { useCallback, useReducer } from "react";

import { serviceData } from "../contact/contact.data";
import ContactDetail from "../contact/ContactDetail";
import SectionHeader from "../../shared/SectionHeader";
import Input from "../../shared/Input";
import { VALIDATOR_MIN_LENGTH, VALIDATOR_MAX_LENGTH, VALIDATOR_EMAIL, VALIDATOR_TEL } from "../../../utils/validators";

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
  type: "INPUT_CHANGE";
  inputId: string;
  value: string;
  isValid: boolean;
};

const formReducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }
        },
        isValid: formIsValid
      };
    default:
      return state;
  }
};

const Contact: React.FC = () => {
  const [formState, dispatch] = useReducer<React.Reducer<FormState, FormAction>>(formReducer, {
    inputs: {
      name: {
        value: "",
        isValid: false
      },
      email: {
        value: "",
        isValid: false
      },
      tel: {
        value: "",
        isValid: false
      },
      message: {
        value: "",
        isValid: false
      }
    },
    isValid: false
  });

  const inputHandler = useCallback((id: string, value: string, isValid: boolean) => {
    dispatch({ type: "INPUT_CHANGE", inputId: id, value: value, isValid: isValid });
  }, []);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("FORM SUBMITTED", formState.inputs);
  };

  return (
    <section className="Contact" id="contact">
      <SectionHeader mainText="Stelle Fragen. Erhalte Antworten." smallText="Kontaktaufnahme" bgText="Kontakt" />
      <section className="details">
        {serviceData.map((detail, index) => {
          return (
            <ContactDetail
              key={index}
              icon={detail.icon}
              header={detail.header}
              text={detail.text}
              anchor={detail.anchor}
            />
          );
        })}
      </section>
      {
        // TODO: Add a frontend form validation. See issue #3.
        // TODO: Add the form action. See issue #4.
      }
      <form onSubmit={submitHandler}>
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
          type="tel"
          id="tel"
          label="Deine Telefonnummer (optional)"
          validators={[VALIDATOR_TEL()]}
          onInput={inputHandler}
          errorText="Bitte eine gültige Telefonnummer angeben oder komplett leer lassen."
        />
        <Input
          type="textarea"
          id="message"
          label="Dein Begehren (Sollte ein Rückruf, anstatt einer Antwortmail gewünscht sein bitte mit angeben.)"
          validators={[VALIDATOR_MIN_LENGTH(3), VALIDATOR_MAX_LENGTH(10240)]}
          onInput={inputHandler}
          errorText="Ich brauche eine möglichst erklärende Nachricht von Dir, damit ich auch konkret darauf eingehen kann. Diese sollte aber nicht viel mehr als 10.000 Zeichen haben."
        />
        <input
          className="btn btn-primary-outline"
          type="submit"
          value="In Kontakt treten"
          disabled={!formState.isValid}
        />
      </form>
    </section>
  );
};

export default Contact;
