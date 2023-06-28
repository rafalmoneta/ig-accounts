import { forwardRef } from "react";
import { Input } from "./input";
import { useFormContext } from "react-hook-form";
import FormFieldError from "./form-field-error";

export type TextFieldOwnProps = {
  label?: string;
  name: string;
};

type TextFieldProps = TextFieldOwnProps &
  React.ComponentPropsWithoutRef<"input">;

export const FormInput = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, id, name, type = "text", ...rest }) => {
    const { register } = useFormContext();

    return (
      <>
        {label && (
          <label
            htmlFor={id || name}
            className="mb-2 block text-base font-semibold leading-[18px] text-trial"
          >
            {label}
          </label>
        )}
        <Input
          id={id || name}
          type={type}
          {...register(name)}
          {...rest}
          className="h-8"
        />
        <FormFieldError name={name} />
      </>
    );
  }
);

FormInput.displayName = "FormInput";
