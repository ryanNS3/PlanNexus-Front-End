import React from 'react';
import Cookies from 'js-cookie';

export const useCookies = (key, defaultValue, options = {}) => {
  const [value, setValue] = React.useState(() => {
    return Cookies.get(key) || defaultValue;
  });

  React.useEffect(() => {
    Cookies.set(key, value, options);
  }, [key, value, options]);

  return [value, setValue];
};
