import { Button } from "@/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import { AccountForm } from "./account-form";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { useCreateAccount } from "../../hooks/create-account";

export const AccountsCreateModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { createAccount } = useCreateAccount();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto h-8 lg:flex mr-2"
        >
          <PlusIcon className="mr-2 h-3 w-3" />
          Create an Account
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create an Account</DialogTitle>
          <DialogDescription>
            Created account will be added to cache.
          </DialogDescription>
        </DialogHeader>
        <AccountForm
          onSubmit={(data) => {
            createAccount(data);
            setIsOpen(false);
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
