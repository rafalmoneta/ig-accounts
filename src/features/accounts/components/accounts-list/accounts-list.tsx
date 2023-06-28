import { useAccounts } from "../../api/get-accounts";
import {
  AccountsTable,
  AccountsTableError,
  AccountsTableLoading,
} from "../accounts-table";
import { useAccountTypes } from "../../api/get-account-types";
import { Account, AccountType } from "../../types";

type AccountTypesById = {
  [key in string]?: string;
};

const formatAccounts = (accounts: Account[], accountTypes: AccountType[]) => {
  const accountTypesById: AccountTypesById = accountTypes.reduce(
    (currValue: { [key: string]: string }, accountType) => {
      currValue[accountType.id] = accountType.title;
      return currValue;
    },
    {}
  );

  return accounts.map((account) => ({
    ...account,
    accountType: accountTypesById[account.accountType] ?? account.accountType,
  }));
};

export const AccountsList = () => {
  // TODO: use react-query's useQueries hook to fetch both queries in parallel?
  // or Create a custom hook that fetches both queries and returns the formatted data?
  const accountsQuery = useAccounts();
  const accountTypesQuery = useAccountTypes();

  const isLoading = accountsQuery.isLoading || accountTypesQuery.isLoading;
  const isError = accountsQuery.isError || accountTypesQuery.isError;
  const isNotFound = !accountsQuery.data || !accountTypesQuery.data;

  if (isError) return <AccountsTableError />;
  if (isLoading || isNotFound) return <AccountsTableLoading />;

  const accountsData = formatAccounts(
    accountsQuery.data,
    accountTypesQuery.data
  );

  return <AccountsTable data={accountsData} />;
};
