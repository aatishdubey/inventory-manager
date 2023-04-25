interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fillType?: "light" | "dark";
}

export const Button = ({fillType, ...props}: Props) => {
  return (
    <button
      {...props}
      className={`inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${
        fillType === "dark"
          ? "bg-blue-900 text-blue-100 hover:bg-blue-800"
          : "bg-blue-100 text-blue-900 hover:bg-blue-200"
      }`}
    >
      {props.children}
    </button>
  );
};
