import { RefObject } from "react";

export enum PATTERN_ERROR_MESSAGES {
  price = "Please enter a valid amount",
  name = "Product name must have at least 3 characters",
  image = "Please enter a valid URL ending in .jpg or .png",
}

export const checkError = (inputRef: RefObject<HTMLInputElement>) => {
  if (!inputRef || !inputRef.current) {
    return null;
  }

  const input = inputRef.current;
  const name = inputRef.current.name as keyof typeof PATTERN_ERROR_MESSAGES;
  const error = !input.checkValidity();
  if(!error) return null;
  const { patternMismatch } = input.validity;
  if (patternMismatch) return PATTERN_ERROR_MESSAGES[name];
  else return inputRef.current.validationMessage;
};

export * from "./TextInput";
export * from "./Textarea";
export * from "./Label";