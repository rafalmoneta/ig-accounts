import { useQueryClient } from "react-query";
import { Account } from "../types";

export const useUpdateAccount = () => {
  const queryClient = useQueryClient();

  const updateAccount = (account: Account) => {
    const currentAccounts = queryClient.getQueryData("accounts") as Account[];
    const updatedAccounts = currentAccounts.map((acc) => {
      if (acc.id === account.id) {
        return account;
      }
      return acc;
    });
    queryClient.setQueryData("accounts", updatedAccounts);
  };

  return { updateAccount };
};
