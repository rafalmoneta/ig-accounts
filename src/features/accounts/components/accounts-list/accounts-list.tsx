import { useAccounts } from "../../api/get-accounts";
import {
  AccountsTable,
  AccountsTableError,
  AccountsTableLoading,
} from "../accounts-table";
import { useAccountTypes } from "../../api/get-account-types";
import { Account, AccountType } from "../../types";
import { AccountsTablePagination } from "../accounts-table/accounts-table-pagination";
import { useState } from "react";

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

export const MAX_NUMBERS_OF_ACCOUNTS = 10;

export const AccountsList = () => {
  const [skip, setSkip] = useState(0);

  const accountsQuery = useAccounts({ skip, max: MAX_NUMBERS_OF_ACCOUNTS });
  const accountTypesQuery = useAccountTypes();

  const isLoading = accountsQuery.isLoading || accountTypesQuery.isLoading;
  const isError = accountsQuery.isError || accountTypesQuery.isError;
  const isNotFound = !accountsQuery.data || !accountTypesQuery.data;

  if (isError) return <AccountsTableError />;
  // if (isLoading || isNotFound) return <AccountsTableLoading />;

  if (isLoading || isNotFound) return <div>Loading</div>;

  const accountsData = formatAccounts(
    accountsQuery.data,
    accountTypesQuery.data
  );

  console.log("accountsData", accountsData)

  return (
    <>
      <AccountsTable data={accountsData} />
      <AccountsTablePagination currentPage={skip} onSetSkip={setSkip}/>
    </>
  );
};
