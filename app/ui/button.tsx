export const Button = ({
    type = "button",
    children, 
    onClick,
    className = ""
  }: {
    type?: "submit" | "button";
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
  }) => {
    return (
      <button 
        type={type} 
        onClick={onClick}
        className={`inline-flex items-center cursor-pointer
        justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 border 
        border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none 
        focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${className}`}
      > 
        {children}
      </button>
    );
  };