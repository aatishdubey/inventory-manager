import { Label } from "@components/Inputs";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea = ({label, ...props}: Props) => {
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
        <textarea
          {...props}
          className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  )
}