import { ACCOUNTS_ENDPOINT } from "@/config";
import { axios } from "@/lib/axios";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { useQuery } from "react-query";
import { Account } from "../types";

export const getAccounts = (): Promise<Account[]> => {
  return axios.get(ACCOUNTS_ENDPOINT).then((response) => response.data);
};

type QueryFnType = typeof getAccounts;

type UseAccountsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useAccounts = ({ config }: UseAccountsOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["accounts"],
    queryFn: () => getAccounts(),
  });
};
