import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { render, RenderOptions } from "@testing-library/react";

export function renderWithClient(
  client: QueryClient,
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) {
  const { rerender, ...result } = render(
    <QueryClientProvider client={client}>{ui}</QueryClientProvider>,
    options
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={client}>{rerenderUi}</QueryClientProvider>
      ),
  };
}
