import { BaseEntity } from "@/types";

export enum AccountEnum {
  IGSB = "IGSB",
  IGSTK = "IGSTK",
  IGCFD = "IGCFD",
  IGISA = "IGISA",
  IGFX = "IGFX",
}

export type Account = {
  name: string;
  default: boolean;
  funds: number;
  profitLoss: number;
  accountType: AccountEnum | string;
  isDemo: boolean;
  currency: string;
} & BaseEntity;

export type AccountType = {
  title: string;
} & BaseEntity;
