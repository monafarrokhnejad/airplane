export const removeStorage = (key) => {
  localStorage.removeItem(key);
};

export const removeMultipleItemsFormStorage = (keys) => {
  keys.map((key) => removeStorage(key));
};

/** getItem for local storage, if use decode parse value  */
export const getStorage = (key, decode = true) => {
  try {
    const value = localStorage.getItem(key);
    if (!value) return null;
    if (decode) return JSON.parse(value);
    else return value;
  } catch (error) {
    return null;
  }
};

/** setItem for local storage, if use encode stringify value  */
export const setStorage = ({ key, value, encode = true, hasPrev = false }) => {
  try {
    let val = hasPrev ? { ...getStorage(key), ...value } : value;
    if (encode) val = JSON.stringify(val);
    return localStorage.setItem(key, val);
  } catch (error) {
    return null;
  }
};
