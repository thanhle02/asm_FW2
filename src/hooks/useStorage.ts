import { useCallback, useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, defaultValue: T | (() => T)) {
  return useStorage(key, defaultValue, window.localStorage);
}

export function useSessionStorage<T>(key: string, defaultValue: T | (() => T)) {
  return useStorage(key, defaultValue, window.sessionStorage);
}

type ValueOrFunction<T> = T | (() => T);

function useStorage<T>(key: string, defaultValue: ValueOrFunction<T>, storageObject: Storage) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue !== null) {
      try {
        return JSON.parse(jsonValue);
      } catch (error) {
        // console.error('Error parsing stored value:', error);
      }
    }
    if (typeof defaultValue === 'function') {
      return (defaultValue as () => T)();
    } else {
      return defaultValue as T;
    }
  });

  useEffect(() => {
    const storedValue = storageObject.getItem(key);
    if (storedValue !== null) {
      try {
        const parsedValue = JSON.parse(storedValue);
        if (parsedValue !== value) {
          setValue(parsedValue);
        }
      } catch (error) {
        console.error('Error parsing stored value:', error);
      }
    } else if (value !== undefined) {
      storageObject.setItem(key, JSON.stringify(value));
    }
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined as T);
  }, []);

  const updateValue = useCallback(
    (newValue: ValueOrFunction<T>) => {
      setValue((prevValue) => {
        const updatedValue =
          typeof newValue === 'function' ? (newValue as () => T)() : newValue;
        storageObject.setItem(key, JSON.stringify(updatedValue));
        return updatedValue;
      });
    },
    [key, storageObject]
  );

  return [value, updateValue, remove] as const;
}
