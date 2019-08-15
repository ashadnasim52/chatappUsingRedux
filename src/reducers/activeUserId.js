import { ACTIVE_USER_ID } from "../action/constants/action-types";
export default (state = "", action) => {
  switch (action.type) {
    case ACTIVE_USER_ID:
      return action.payload;

    default:
      return state;
  }
};
