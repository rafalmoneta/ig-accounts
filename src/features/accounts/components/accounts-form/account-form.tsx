import z from "zod";
import {
  Controller,
  FormProvider,
  useForm,
  SubmitHandler,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "@/components/form-input";
import { Button } from "@/components/button";
import { useAccountTypes } from "../../api/get-account-types";
import FormFieldError from "@/components/form-field-error";

const accountFormSchema = z.object({
  name: z.string().nonempty({ message: "Account name is required" }),
  accountType: z.string().nonempty({ message: "Account type is required" }),
});

type AccountFormData = z.infer<typeof accountFormSchema>;

interface AccountFormProps {
  defaultValues?: AccountFormData;
  onSubmit: SubmitHandler<AccountFormData>;
}

export const AccountForm = ({ defaultValues, onSubmit }: AccountFormProps) => {
  const accountTypesQuery = useAccountTypes();
  const methods = useForm<AccountFormData>({
    defaultValues: defaultValues ?? {},
    resolver: zodResolver(accountFormSchema),
  });

  const { handleSubmit } = methods;

  const options = accountTypesQuery.data ?? [];

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput name="name" label="Name" type="name" />
        <Controller
          name="accountType"
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <label
                htmlFor="accountType"
                className="mb-2 mt-4 block text-base font-semibold leading-[18px] text-trial"
              >
                Account Type
              </label>
              <select
                {...field}
                className="shadow-sm w-full rounded-md border border-input bg-background px-2 py-[5px] text-sm"
              >
                <option value="">Select an Account Type</option>
                {options.map((option) => (
                  <option key={option.title} value={option.id}>
                    {option.title}
                  </option>
                ))}
              </select>
            </>
          )}
        />
        <FormFieldError name="accountType" />
        <div>
          <Button type="submit" className="h-8 px-2 lg:px-3 mt-8">
            Create an Account
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
