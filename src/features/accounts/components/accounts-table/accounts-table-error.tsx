export const AccountsTableError = () => {
  return (
    <div className="flex justify-center items-center flex-col text-center text-red-500 border-red-400 border transition-colors hover:bg-muted/50 h-[404px] rounded-md">
      <h3 className="text-2xl font-bold tracking-tight">
        Something went wrong!
      </h3>
      <div>There was an error loading the accounts.</div>
    </div>
  );
};
