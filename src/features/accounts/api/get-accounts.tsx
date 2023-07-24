import { ACCOUNTS_ENDPOINT } from "@/config";
import { axios } from "@/lib/axios";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { useQuery } from "react-query";
import { Account } from "../types";

type GetAccountsParams = {
  skip: number;
  max: number;
};

export const getAccounts = (skip = 0): Promise<Account[]> => {
  return axios
    .get(`${ACCOUNTS_ENDPOINT}?skip=${skip}&max=${10}`)
    .then((response) => response.data);
};

type QueryFnType = typeof getAccounts;

type UseAccountsOptions = {
  // skip: number | string;
  skip: number;
  max: number;
  config?: QueryConfig<QueryFnType>;
};

const defaultConfig = {
  skip: 0,
  max: 10,
};

export const useAccounts = ({
  config,
  skip,
  max,
}: UseAccountsOptions = defaultConfig) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["accounts", skip],
    queryFn: () => getAccounts(skip),
  });
};
