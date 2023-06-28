import { QueryClientProvider } from "react-query";
import { queryClient } from "@/lib/react-query";
import { Section } from "@/components/section";
import { AccountsHeader } from "@/features/accounts";
import { AccountsList } from "@/features/accounts";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="relative p-4">
        <Section>
          <AccountsHeader />
          <AccountsList />
        </Section>
      </main>
    </QueryClientProvider>
  );
}

export default App;
