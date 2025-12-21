import React from "react";

type ButtonVariant = "filled" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style of the button.
   * @default "filled"
   */
  variant?: ButtonVariant;
}

/**
 * Reusable button component with two visual variants: `filled` (default) and `outline`.
 */
const Button: React.FC<ButtonProps> = ({
  variant = "filled",
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center cursor-pointer justify-center gap-2 rounded-full px-7 py-3 leading-none! md:py-3.5 text-base font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const filledStyles =
    "bg-blue text-white border border-transparent hover:border-blue hover:bg-transparent hover:text-blue";
  const outlineStyles =
    "border border-white text-white hover:bg-blue hover:text-white focus-visible:ring-blue-600";

  const variantStyles = variant === "outline" ? outlineStyles : filledStyles;

  return (
    <button
      {...props}
      className={`${baseStyles} ${variantStyles} ${className}`.trim()}
    >
      {children}
    </button>
  );
};

export default Button;
