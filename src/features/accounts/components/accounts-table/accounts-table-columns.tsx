import { ColumnDef } from "@tanstack/react-table";
import { Account } from "../../types";
import { AccountsTableActions } from "./accounts-table-actions";
import { cn } from "@/lib/utils";
import { AccountsTableHeaderSorting } from "./accounts-table-header-filter";

export const accountsTableColumns: ColumnDef<Account>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <AccountsTableHeaderSorting title="Name" column={column} />
    ),
    cell: ({ row }) => {
      const isDemo = row.original.isDemo;

      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("name")}
          </span>
          {isDemo && (
            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              Demo
            </div>
          )}
        </div>
      );
    },
    minSize: 400,
  },
  {
    accessorKey: "profitLoss",
    header: ({ column }) => (
      <AccountsTableHeaderSorting title="Profit & Loss" column={column} />
    ),
    cell: ({ row }) => {
      const value = row.getValue<number>("profitLoss");
      const profitLoss = value.toLocaleString("en-US");
      const currency = row.original.currency;

      return (
        <div
          className={cn(
            "flex items-center",
            value >= 0 ? "text-green-500" : "text-red-500"
          )}
        >
          {`${currency} ${profitLoss}`}
        </div>
      );
    },
  },
  {
    accessorKey: "funds",
    header: ({ column }) => (
      <AccountsTableHeaderSorting title="Funds" column={column} />
    ),
    cell: ({ row }) => {
      const value = row.getValue<number>("funds");
      const funds = value.toLocaleString("en-US");
      const currency = row.original.currency;
      return <div className="flex items-center">{`${currency} ${funds}`}</div>;
    },
  },
  {
    accessorKey: "accountType",
    header: ({ column }) => (
      <AccountsTableHeaderSorting title="Account Type" column={column} />
    ),
    cell: ({ row }) => (
      <div className="flex items-center">{row.getValue("accountType")}</div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <div className="flex justify-end mr-4">
        <AccountsTableActions row={row} />
      </div>
    ),
    maxSize: 100,
  },
];
