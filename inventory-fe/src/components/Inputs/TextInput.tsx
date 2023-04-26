import React, { useRef, useState } from "react";
import { Label, checkError } from ".";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  prefixText?: string;
}

export const TextInput = ({label, prefixText, ...props}: Props) => {
  const [Error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleBlur = () => {
    const error = checkError(inputRef);
    setError(error);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(Error) {
      const error = checkError(inputRef);
      setError(error);
    }
    if(props.onChange) props.onChange(e);
  }

  return (
    <div>
      {label && (
        <Label
          htmlFor={props.id}
        >
          {label}
        </Label>
      )}
      <div className="relative mt-2 rounded-md shadow-sm">
        {prefixText && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">{prefixText}</span>
          </div>
        )}
        <input
          {...props}
          ref={inputRef}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`block w-full py-1.5 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${prefixText ? "pl-10 pr-2" : "px-2"}`}
        />
      </div>
      {Error && <span className="block px-2 mt-2 py-2 rounded-md border-0 w-full bg-red-200 text-red-600 text-sm">{Error}</span>}
    </div>
  );
};
