import * as React from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { cn } from "@/lib/utils";
import Label from "./Label";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  name: Path<any>;
  register?: UseFormRegister<any>;
  required?: boolean;
  prependIcon?: React.ReactNode | string;
  appendIcon?: React.ReactNode | string;
  error?: string;
  inputClassName?: string;
  placeholder?: string;
}

const Input = ({
  className,
  type,
  labelClassName,
  prependIcon,
  appendIcon,
  wrapperClassName,
  register,
  error,
  label,
  inputClassName,
  placeholder,
  ...props
}: InputProps) => {
  return (
    <div className={cn(wrapperClassName, "group w-full")}>
      {label && (
        <Label
          htmlFor={props.id}
          className={cn(
            `mb-1 block text-sm font-poppins text-[#575757] group-valid:text-[#171717] group-has-[:valid]:text-[#171717]`,
            labelClassName
          )}
        >
          {label} {props.required && <span className="text-red-500">*</span>}
        </Label>
      )}

      <div
        className={cn(
          "gro flex h-[40px] min-w-full items-center overflow-hidden bg-white rounded-md  border-input px-3 focus-within:border-[#22C55E] border",
          inputClassName,
          (type === "radio" || type === "checkbox") && "!border-none h-[20px]"
        )}
      >
        {prependIcon}

        <input
          tabIndex={1}
          type={type}
          placeholder={placeholder ? placeholder : ""}
          className={cn(
            "placeholder:text-grey-swatch-600 flex h-full w-full flex-1 bg-transparent py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            prependIcon ? "pl-3" : "",
            className
          )}
          {...(register &&
            register(props.name, {
              ...(props.required && { required: props.required }),
            }))}
          {...props}
        />
        {appendIcon}
      </div>
      {error && <p className="mt-[2px] text-[10px] text-[#E31B23]">{error}</p>}
    </div>
  );
};

Input.displayName = "Input";

export default Input;
