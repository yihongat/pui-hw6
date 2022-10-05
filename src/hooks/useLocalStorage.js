import { useEffect, useState } from "react";

const parseStringToJson = (value) => {
  try {
    return JSON.parse(value)
  } catch (e) {
    return null
  }
}

const useLocalStorage = (key, fallbackValue) => {
  const [value, setValue] = useState(
    parseStringToJson(localStorage.getItem(key)) || fallbackValue
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    console.log(
      `[useLocalStorage]: ${key} updated with value ${localStorage.getItem(
        key
      )}`
    );
  }, [key, value]);
  return [value, setValue];
};

export default useLocalStorage;