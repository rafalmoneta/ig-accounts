import { screen, within } from "@testing-library/react";
import { AccountsTable } from "../accounts-table";
import { Account } from "../../../types";
import { renderWithClient } from "@/tests/utils";
import { QueryClient } from "react-query";

const mockData: Account[] = [
  {
    _id: "5d9ddef4915161280000853b",
    id: "1",
    name: "Spread bet",
    isDemo: false,
    profitLoss: 0.23,
    funds: 10000,
    accountType: "IGSB",
    default: true,
    currency: "$",
  },
  {
    _id: "5d9ddef4915161280000853c",
    id: "2",
    name: "New Spread bet",
    default: false,
    funds: 1000,
    profitLoss: -679,
    accountType: "IGSB",
    isDemo: false,
    currency: "$",
  },
];

describe("AccountsTable", () => {
  it("renders the table headers", () => {
    const queryClient = new QueryClient();
    renderWithClient(queryClient, <AccountsTable data={mockData} />);

    const nameHeader = screen.getByRole("columnheader", { name: /name/i });
    expect(nameHeader).toBeInTheDocument();

    const fundsHeader = screen.getByRole("columnheader", { name: /funds/i });
    expect(fundsHeader).toBeInTheDocument();

    const profitLossHeader = screen.getByRole("columnheader", {
      name: /profit & loss/i,
    });
    expect(profitLossHeader).toBeInTheDocument();

    const accountTypeHeader = screen.getByRole("columnheader", {
      name: /account type/i,
    });
    expect(accountTypeHeader).toBeInTheDocument();
  });

  it("renders the table rows", () => {
    const queryClient = new QueryClient();
    renderWithClient(queryClient, <AccountsTable data={mockData} />);

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(3);

    const firstRow = rows[1];
    const cells = within(firstRow).getAllByRole("cell");
    expect(cells).toHaveLength(5);
    expect(cells[0]).toHaveTextContent("Spread bet");
    expect(cells[1]).toHaveTextContent("$ 0.23");
    expect(cells[2]).toHaveTextContent("$ 10,000");
    expect(cells[3]).toHaveTextContent("IGSB");

    const secondRow = rows[2];
    const secondRowCells = within(secondRow).getAllByRole("cell");
    expect(secondRowCells).toHaveLength(5);
    expect(secondRowCells[0]).toHaveTextContent("New Spread bet");
    expect(secondRowCells[1]).toHaveTextContent("$ -679");
    expect(secondRowCells[2]).toHaveTextContent("$ 1,000");
    expect(secondRowCells[3]).toHaveTextContent("IGSB");
  });

  it('renders the "No Results Found" message when there is no data', () => {
    const queryClient = new QueryClient();
    renderWithClient(queryClient, <AccountsTable data={[]} />);

    const noResults = screen.getByText(/no results found/i);
    expect(noResults).toBeInTheDocument();
  });
});
