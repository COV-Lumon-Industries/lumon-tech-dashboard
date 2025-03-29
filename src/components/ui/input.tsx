import * as React from "react";

import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { AnyFieldApi } from "@tanstack/react-form";

type Input = React.ComponentProps<"input"> & {
  label?: string;
  labelClassName?: string;
  containerClassName?: string;
  error?: string;
  fieldInfo?: AnyFieldApi;
}


const Input = React.forwardRef<HTMLInputElement, Input>(
  ({ className, type, fieldInfo, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(type === "password" ? false : true);
    const field = fieldInfo;

    return (
      <div className={cn("relative flex w-full flex-col gap-2", props.labelClassName)}>
        {props.label && (
          <label
            htmlFor={props.id}
            className={cn(
              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              props.labelClassName
            )}
          >
            {props.label}
          </label>
        )}
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : type}
            className={cn(
              "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              className
            )}
            ref={ref}
            {...props}
          />
        {type === "password" && (
          <button
            type="button"
            className="absolute right-2.5 bottom-2.5 text-gray-500 hover:text-gray-700"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        )}
        </div>
        {
          field?.state.meta.isTouched && field.state.meta.errors.length 
            ? (
              <em className="text-xs text-red-700">{field.state.meta.errors.map(error => error.message).join(", ")}</em>
            ) : null
        }
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
