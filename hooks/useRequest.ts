import axios, { AxiosResponse } from "axios";
import { useCallback, useState } from "react";
import { Mutation } from "../data/models/mutationtype";
import {
  RequestBody,
  RequestQueryParams,
  RequestUrlParams,
} from "../data/models/requestParams";
import { HttpClient, HttpMethod } from "../data/protocols/http";

export const useRequest = (
  requestHttpClient: Mutation
): [
  any,
  {
    data: AxiosResponse;
    isLoading: boolean;
    axiosError: AxiosResponse | undefined;
    error: Error | undefined;
    isSuccess: boolean;
  }
] => {
  const [data, setData] = useState<any>();
  const [axiosError, setAxiosError] = useState<AxiosResponse | undefined>(
    undefined
  );
  const [error, setError] = useState<Error | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const requestaxios = async (
    urlParams: RequestUrlParams,
    queryParams: RequestQueryParams
  ) => {
    setIsLoading(true);
    const request = await requestHttpClient(urlParams, queryParams);
    setIsLoading(false);
    if(request.response){
      setData(request.response.data);
      setIsSuccess(true);
    }
    
    if(request.axiosErrorResponse){
      setAxiosError(request.axiosErrorResponse)
    }
    else{
      setError(request.error);
    }
  };

  const request = useCallback(requestaxios, [requestHttpClient]);

  return [request, { data, isLoading, axiosError, error, isSuccess}];
};
