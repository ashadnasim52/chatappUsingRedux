import { getMessages } from "../static-data";
import { SEND_MESSAGE } from "../action/constants/action-types";
import _ from "lodash";
export default (state = getMessages(80), action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const { message, userId } = action.payload;
      const activeUserMessage = state[userId];
      const number = +_.keys(activeUserMessage).pop() + 1;

      return {
        ...state,
        [userId]: {
          ...activeUserMessage,
          [number]: {
            number,
            text: message,
            is_user_msg: true
          }
        }
      };

    default:
      return state;
  }
  return state;
};
