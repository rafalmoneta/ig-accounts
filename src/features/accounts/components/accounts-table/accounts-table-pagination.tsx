import { Button } from "@/components/button";
import { Table } from "@tanstack/react-table";
import { Account } from "../../types";
import { MAX_NUMBERS_OF_ACCOUNTS } from "../accounts-list/accounts-list";

interface AccountsTablePaginationProps {
  table?: Table<Account>;
  currentPage: number;
  onSetSkip: React.Dispatch<React.SetStateAction<number>>;
}

export const AccountsTablePagination = ({
  table,
  currentPage,
  onSetSkip,
}: AccountsTablePaginationProps) => {

  const isPrevButtonDisabled = currentPage <= 0;

  return (
    <div className="flex justify-between">
      <div>Number of page</div>
      <div className="flex justify-between gap-2 items-center">
        <Button
          variant="outline"
          disabled={isPrevButtonDisabled}
          onClick={() => onSetSkip((skip) => skip - MAX_NUMBERS_OF_ACCOUNTS)}
        >
          Prev Page
        </Button>
        <span className="mx-2 font-bold">{(currentPage / 10) + 1}</span>
        <Button
          variant="outline"
          onClick={() => onSetSkip((skip) => skip + MAX_NUMBERS_OF_ACCOUNTS)}
        >
          Next Page
        </Button>
      </div>
    </div>
  );
};
