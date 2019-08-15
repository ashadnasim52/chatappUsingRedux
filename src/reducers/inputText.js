import {
  SET_INPUT_VALUE,
  SEND_MESSAGE
} from "../action/constants/action-types";
export default (state = "", action) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return action.payload;
    case SEND_MESSAGE:
      return "";
    default:
      return state;
  }
};
