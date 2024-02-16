import {isValidEmail, isValidPassword} from '../../../src/utils/isValid';

describe('Email Validity', () => {
  it('when email is not valid', () => {
    const email = 'raj.kumar.23@gmail';
    const result = isValidEmail(email);
    expect(result).toEqual(false);
  });
  it('when email is not valid @missing', () => {
    const email = 'raj.kumar.23gmail.com';
    const result = isValidEmail(email);
    expect(result).toEqual(false);
  });
  it('when email is valid', () => {
    const email = 'raj.kumar23@gmail.com';
    const result = isValidEmail(email);
    expect(result).toEqual(true);
  });
});

describe('password Validity', () => {
  it('password not valid', () => {
    const password = '24bj410jjij';
    const result = isValidPassword(password);
    expect(result).toEqual(false);
  });
  it('password is valid', () => {
    const password = 'As12hi@hkoj';
    const result = isValidPassword(password);
    expect(result).toEqual(true);
  });
});
