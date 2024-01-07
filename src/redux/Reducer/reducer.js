import { USER_LOGIN,SHOW_ONBORDINNG } from "../Action/action";
const initialState = {
  userlogin: false,
  showOnboarding: true,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        userlogin: action.payload,
      };
      case SHOW_ONBORDINNG:
        return {
          ...state,
          showOnboarding: action.payload,
        };
    default:
      return state;
  }
};
export default rootReducer;
