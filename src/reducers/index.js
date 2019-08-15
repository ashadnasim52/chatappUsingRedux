import { combineReducers } from "redux";
import contacts from "./contacts";
import activeUserId from "./activeUserId";
import messages from "./messages";
import user from "./user";
const reducer = combineReducers({
  contacts,
  activeUserId,
  user,
  messages
});

export default reducer;
