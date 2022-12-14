function validateIsEmpty(val) {
  return val.trim().length === 0 ? "You should type something" : "";
}

function validateHasNumbers(val) {
  return /^[0-9\s]+$/.test(val) ? "String should not contain only numbers" : "";
}

function validateMinLength(val) {
  return val.length < 3 ? "String length should be more than 3 chars" : "";
}

function validateOneUppercase(val) {
  return !/[A-Z]/.test(val)
    ? "String should have at least one upper case letter"
    : "";
}

function validateSpecSymbol(val) {
  return !/[$&+,:;=?@#|'<>.^*()%!-]/.test(val)
    ? "String should containt at least one special symbol"
    : "";
}

function validateNoSpaces(val) {
  return /\s/.test(val) ? "String should not contain any spaces" : "";
}
const validateEmail = (val) => {
  return /\S+@\S+\.\S+/.test(val) ? "" : "Wrong Email";
};

const IS_EMPTY = "IS_EMPTY";
const ONLY_NUMBERS = "ONLY_NUMBERS";
const MIN_LENGTH = "MIN_LENGTH";
const ONE_UPPERCASE = "ONE_UPPERCASE";
const ONE_SPEC_SYMBOL = "ONE_SPEC_SYMBOL";
const NO_SPACES = "NO_SPACES";
const EMAIL = "EMAIL";

const VALIDATION_HANDLERS = {
  [IS_EMPTY]: validateIsEmpty,
  [ONLY_NUMBERS]: validateHasNumbers,
  [MIN_LENGTH]: validateMinLength,
  [ONE_UPPERCASE]: validateOneUppercase,
  [ONE_SPEC_SYMBOL]: validateSpecSymbol,
  [NO_SPACES]: validateNoSpaces,
  [EMAIL]: validateEmail,
};

export const validate = (val, config) => {
  return config.reduce((validationMessage, validationFuncName) => {
    return validationMessage
      ? validationMessage
      : VALIDATION_HANDLERS[validationFuncName](val);
  }, "");
};

export const loginConfig = [ONLY_NUMBERS, NO_SPACES, IS_EMPTY, EMAIL];
export const passwordConfig = [ONE_UPPERCASE, ONE_SPEC_SYMBOL, NO_SPACES];
