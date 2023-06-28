import { useFormContext } from 'react-hook-form';

interface FormFieldErrorProps {
  name: string;
}

const FormFieldError = ({ name }: FormFieldErrorProps) => {
  const {
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[name]?.message?.toString();

  return fieldError ? (
    <span className="block pt-1 text-xs text-red-500">{fieldError}</span>
  ) : (
    <></>
  );
};

export default FormFieldError;