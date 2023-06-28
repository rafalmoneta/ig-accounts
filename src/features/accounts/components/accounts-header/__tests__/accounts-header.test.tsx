import { render, screen } from "@testing-library/react";
import { AccountsHeader } from "..";

describe("AccountsHeader", () => {
  it("renders the header and subheader text", () => {
    render(<AccountsHeader />);

    const header = screen.getByText("Accounts Dashboard!");
    expect(header).toBeInTheDocument();

    const subheader = screen.getByText("Here's a list of your active accounts!");
    expect(subheader).toBeInTheDocument();
  });

  it("renders the IG Group logo", () => {
    render(<AccountsHeader />);

    const logo = screen.getByRole('img', {  name: /ig group logo/i})
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "https://assets.lsegissuerservices.com/original-3ac1cea3-8c99-4f95-a983-f2b095163cbb.png");
    expect(logo).toHaveAttribute("width", "50");
    expect(logo).toHaveAttribute("height", "50");
    expect(logo).toHaveClass("rounded-full");
  });
});