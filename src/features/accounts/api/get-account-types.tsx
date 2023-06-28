import { ACCOUNT_TYPES_ENDPOINT } from "@/config";
import { axios } from "@/lib/axios";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { useQuery } from "react-query";
import { AccountType } from "../types";

export const getAccountTypes = (): Promise<AccountType[]> => {
  return axios.get(ACCOUNT_TYPES_ENDPOINT).then((response) => response.data);
};

type QueryFnType = typeof getAccountTypes;

type UseAccountsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useAccountTypes = ({ config }: UseAccountsOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["account-types"],
    queryFn: () => getAccountTypes(),
  });
};
