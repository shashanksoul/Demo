import Validator from 'validator';
export const isValidEmail = (email: string): boolean =>
  Validator.isEmail(email);

export const isValidPassword = (password: string): boolean =>
  Validator.isStrongPassword(password, {
    minLength: 8,
    minUppercase: 1,
    minLowercase: 1,
    minSymbols: 1,
  });
