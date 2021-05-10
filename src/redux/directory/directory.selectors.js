import { createSelector } from "reselect";

// select state.directory
const selectDirectory = (state) => state.directory;

// select state.directory.sections
export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
