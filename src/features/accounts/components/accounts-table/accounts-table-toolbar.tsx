import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Table } from "@tanstack/react-table";
import { X } from "lucide-react";
import { Account } from "../../types";
import { AccountsTableViewOptions } from "./accounts-table-view-options";
import { AccountsCreateModal } from "../accounts-form";

interface AccountsTableToolbarProps {
  table: Table<Account>;
}

export const AccountsTableToolbar = ({ table }: AccountsTableToolbarProps) => {
  const isFiltered =
    table.getPreFilteredRowModel().rows.length >
    table.getFilteredRowModel().rows.length;

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center space-x-2">
          <Input
            placeholder="Filter accounts..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="h-8 w-[150px] lg:w-[250px]"
          />
          {isFiltered && (
            <Button
              variant="ghost"
              onClick={() => table.resetColumnFilters()}
              className="h-8 px-2 lg:px-3"
            >
              Reset
              <X className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
        <AccountsCreateModal />
        <AccountsTableViewOptions table={table} />
      </div>
    </>
  );
};
