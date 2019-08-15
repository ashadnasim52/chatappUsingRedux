import { getMessages } from "../static-data";
export default (state = getMessages(80), action) => {
  return state;
};
