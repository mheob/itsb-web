import { Reducer, useCallback, useReducer } from 'react';

export interface FormState {
  inputs: {
    [prop: string]: {
      value: string;
      isValid: boolean;
    };
  };
  isValid: boolean;
}

interface FormAction {
  type: 'INPUT_CHANGE';
  inputId?: string;
  value?: string;
  isValid?: boolean;
}

const formReducer = (state: FormState, action: FormAction) => {
  let formIsValid = true;
  switch (action.type) {
    case 'INPUT_CHANGE':
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
          [action.inputId!]: { value: action.value!, isValid: action.isValid! },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

export const useContactForm = (initialFormState: FormState) => {
  const [formState, dispatch] = useReducer<Reducer<FormState, FormAction>>(formReducer, initialFormState);

  const inputHandler = useCallback((id: string, value: string, isValid: boolean) => {
    dispatch({
      type: 'INPUT_CHANGE',
      inputId: id,
      value,
      isValid,
    });
  }, []);

  return { formState, inputHandler };
};
