import { AxiosHttpClient } from "../../infra/http/axios-http-client";
import { RequestParams } from "../models/mutationtype";

export const verifyBillet: RequestParams = async (urlParams, _queryParams) =>
  await new AxiosHttpClient("get", {}).request({
    url: `/api/boleto?linhaDigitavel=${urlParams?.codBoleto}`,
  });
