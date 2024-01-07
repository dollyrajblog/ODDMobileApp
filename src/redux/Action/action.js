export const USER_LOGIN = 'USER_LOGIN';
export const SHOW_ONBORDINNG ="SHOW_ONBORDINNG"

export function User_Login(txt) {
  return {
    type: USER_LOGIN,
    payload: txt,
  };
}
export function Onbording_Show(txt) {
  return {
    type: SHOW_ONBORDINNG,
    payload: txt,
  };
}
