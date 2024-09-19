import _ from "lodash";

export const isNullOrUndefined = (value) => {
  return value === null || value === undefined;
};
export const isEmptyObject = (value) => {
  return _.isEmpty(value);
};

export const isEmptyOrSpaces = (str) => {
  return str === null || str.match(/^ *$/) !== null;
};
