import { USER_LOGIN } from "../Action/action";
const initialState = {
  userlogin: false,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        userlogin: action.payload,
      };
    default:
      return state;
  }
};
export default rootReducer;
