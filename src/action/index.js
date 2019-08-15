import { ACTIVE_USER_ID } from "./constants/action-types";
export const setActiveUserId = userId => ({
  type: ACTIVE_USER_ID,
  payload: userId
});
