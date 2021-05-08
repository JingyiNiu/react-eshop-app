import { createSelector } from "reselect";

// select state.user from whole state
const selectUser = (state) => state.user;

// state.user.currentUser
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
