enum ValidationType {
  MIN_LENGTH,
  MAX_LENGTH,
  EMAIL,
  TEL
}

export interface ValidatorType {
  type: ValidationType;
  val?: number;
}

export const VALIDATOR_MIN_LENGTH = (val: number): ValidatorType => ({ type: ValidationType.MIN_LENGTH, val: val });
export const VALIDATOR_MAX_LENGTH = (val: number): ValidatorType => ({ type: ValidationType.MAX_LENGTH, val: val });
export const VALIDATOR_EMAIL = (): ValidatorType => ({ type: ValidationType.EMAIL });
export const VALIDATOR_TEL = (): ValidatorType => ({ type: ValidationType.TEL });

export const validate = (value: string, validators: ValidatorType[]) => {
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === ValidationType.MIN_LENGTH) {
      isValid = isValid && value.trim().length >= validator.val!;
    }
    if (validator.type === ValidationType.MAX_LENGTH) {
      isValid = isValid && value.trim().length <= validator.val!;
    }
    if (validator.type === ValidationType.EMAIL) {
      isValid = isValid && /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,8})+$/.test(value);
    }
    if (validator.type === ValidationType.TEL && value.trim().length > 0) {
      isValid = isValid && /^(\(?([\d -)–+/(]+){6,}\)?([ .-–/]?)([\d]+))$/.test(value);
      console.log(value.trim().length);
    }
  }
  return isValid;
};
