export const USER_LOGIN = 'USER_LOGIN';

export function User_Login(txt) {
  return {
    type: USER_LOGIN,
    payload: txt,
  };
}
