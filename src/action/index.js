import {
  ACTIVE_USER_ID,
  SET_INPUT_VALUE,
  SEND_MESSAGE
} from "./constants/action-types";
//this function will set the active user id
export const setActiveUserId = userId => ({
  type: ACTIVE_USER_ID,
  payload: userId
});

//active user id is the uid to send
//value is text need to send
export const setTypingValue = value => ({
  type: SET_INPUT_VALUE,
  payload: value
});

//action to send message to the server and it in view
export const sendMessage = (message, userId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    userId
  }
});
