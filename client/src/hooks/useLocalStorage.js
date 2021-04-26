import { useState, useEffect } from 'react';

const store = window.localStorage;

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const item = store.getItem(key);

    let val;

    if (item) {
      try {
        val = JSON.parse(item);
      } catch {
        val = '';
      }
    }

    return val || initialValue;
  });

  useEffect(() => {
    const item = JSON.stringify(value);

    store.setItem(key, item);
  }, [value]);

  return [value, setValue];
};
