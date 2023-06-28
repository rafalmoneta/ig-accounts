import { Button } from "@/components/button";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Column } from "@tanstack/react-table";
import { Account } from "../../types";

interface AccountsTableHeaderSortingProps {
  title: string;
  column: Column<Account, unknown>;
}

export const AccountsTableHeaderSorting = ({
  title,
  column,
}: AccountsTableHeaderSortingProps) => {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      className="pl-1"
    >
      {title}
      <CaretSortIcon className="ml-2 h-4 w-4" />
    </Button>
  );
};
