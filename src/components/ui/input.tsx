import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftSection?: JSX.Element;
  rightSection?: JSX.Element;
}

// const Input = React.forwardRef<HTMLInputElement, InputProps>(
//   ({ className, type, ...props }, ref) => {
//     return (
//       <input
//         type={type}
//         className={cn(
//           'flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-none transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50  ',
//           className,
//         )}
//         ref={ref}
//         {...props}
//       />
//     );
//   },
// );
// Input.displayName = 'Input';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftSection, rightSection, ...props }, ref) => {
    const hasSection = Boolean(leftSection) || Boolean(rightSection);
    return (
      <>
        {hasSection ? (
          <div
            className="#gap-2 flex items-center justify-center rounded-md border border-input bg-transparent ring-offset-background autofill:bg-background focus-within:ring-1 focus-within:ring-inset focus-within:ring-ring data-[disabled=true]:cursor-not-allowed  data-[disabled=true]:opacity-50 focus-visible:ring-inset "
            data-disabled={props.disabled}
          >
            {leftSection && (
              <div className={cn("text-muted-foreground")}>{leftSection}</div>
            )}
            <input
              type={type}
              className={cn(
                "flex h-full w-full rounded-md border-none bg-transparent py-2 text-sm shadow-none outline-none file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:border-none focus-visible:shadow-none focus-visible:outline-none",
                className,
                hasSection ? "px-4 focus-within:ring-0" : ""
              )}
              ref={ref}
              {...props}
            />
            {rightSection && (
              <div className={cn("text-muted-foreground")}>{rightSection}</div>
            )}
          </div>
        ) : (
          <input
            type={type}
            className={cn(
              "flex h-8 w-full rounded-md border border-input bg-transparent px-4 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:ring-1 focus:ring-inset focus:ring-ring focus-visible:border-transparent  focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            ref={ref}
            {...props}
          />
        )}
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };

const Input3 = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    // ({ className, variant, type, size, asChild = false, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50  ",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input3.displayName = "Input3";

export { Input3 };
