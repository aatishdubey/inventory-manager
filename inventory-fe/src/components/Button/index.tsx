interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fillType?: "light" | "dark";
  loading?: boolean;
}

export const Button = ({fillType, loading, ...props}: Props) => {
  return (
    <button
      {...props}
      className={`inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${
        fillType === "dark"
          ? "bg-blue-900 text-blue-100 hover:bg-blue-800"
          : "bg-blue-100 text-blue-900 hover:bg-blue-200"
      }`}
    >
      {loading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Submitting...
        </>
        ) : props.children}
    </button>
  );
};
