export const AccountsHeader = () => {
  return (
    <div className="flex items-center justify-between space-y-2 mb-12">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          Accounts Dashboard!
        </h2>
        <p className="text-muted-foreground">
          Here's a list of your active accounts!
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <img
          src="https://assets.lsegissuerservices.com/original-3ac1cea3-8c99-4f95-a983-f2b095163cbb.png"
          alt="IG Group Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
    </div>
  );
};
