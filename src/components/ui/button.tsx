import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "default" | "sm" | "lg";
  variant?: "default" | "primary" | "outline" | "ghost";
  asChild?: boolean;
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className = "",
    children,
    size = "default",
    variant = "default",
    asChild = false,
    ...props
  }, ref) => {
    const sizeClasses = {
      default: "py-2 px-4",
      sm: "py-1 px-3 text-sm",
      lg: "py-3 px-6 text-lg"
    };
    
    const variantClasses = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      primary: "bg-amber-500 text-white hover:bg-amber-600 shadow-md",
      outline: "border-2 border-white bg-transparent text-white hover:bg-blue-700 hover:border-transparent",
      ghost: "bg-transparent text-white hover:bg-blue-700 border border-white"
    };
    
    const baseClasses = "font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const classNames = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
    
    if (asChild) {
      return (
        <div className={classNames}>
          {children}
        </div>
      );
    }
    
    return (
      <button
        ref={ref}
        className={classNames}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";