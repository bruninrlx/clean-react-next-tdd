import { AxiosHttpClient } from "../../infra/http/axios-http-client";
import { Mutation } from "../models/mutationtype";

export const insertPersonalData:Mutation = async (body, urlParams, _queryParams)  =>
  await new AxiosHttpClient("post", {}).request({
    data: body,
    url: `/api/parcelamento/preenchimento-dados?boletoId=${urlParams?.boletoId}`
  });
