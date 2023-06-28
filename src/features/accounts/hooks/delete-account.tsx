import { useQueryClient } from "react-query";
import { Account } from "../types";

export const useDeleteAccount = () => {
  const queryClient = useQueryClient();

  const removeAccount = (id: string) => {
    const currentAccounts = queryClient.getQueryData("accounts") as Account[];
    const filteredAccounts = currentAccounts.filter(
      (account) => account.id !== id
    );
    queryClient.setQueryData("accounts", filteredAccounts);
  };

  return { removeAccount };
};
