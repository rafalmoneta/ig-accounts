import { useQueryClient } from "react-query";
import { Account } from "../types";

export const createAccountFromObject = (account: Partial<Account>) => {
  return {
    id: new Date().getTime(),
    name: account.name,
    accountType: account.accountType,
    default: false,
    isDemo: true,
    currency: "$",
    funds: 10000,
    profitLoss: Math.floor(Math.random() * 2000) - 1000,
  };
};

export const useCreateAccount = () => {
  const queryClient = useQueryClient();

  const createAccount = (account: Partial<Account>) => {
    const currentAccounts = queryClient.getQueryData("accounts") as Account[];
    const newAccount = createAccountFromObject(account);
    const updatedAccounts = [...currentAccounts, newAccount];
    queryClient.setQueryData("accounts", updatedAccounts);
  };

  return { createAccount };
};
