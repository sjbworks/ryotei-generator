import { Optional } from "../types/index.ts";

export const getLocalStorage = <T>(
  value: Optional<string>,
  key: string,
  fallbackValue?: T
): Optional<T> => {
  const parseValue = value ? JSON.parse(value) : undefined;
  try {
    const item = localStorage.getItem(key);
    return item ? parseValue : fallbackValue;
  } catch (error) {
    console.warn(error);
    return fallbackValue;
  }
};

export const setLocalStorage = <T>(key: string, value: T): boolean => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn(error);
    return false;
  }
};
