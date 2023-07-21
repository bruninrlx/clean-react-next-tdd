import { AxiosHttpClient } from "../../infra/http/axios-http-client";
import { Mutation } from "../models/mutationtype";

const insertInstallments:Mutation = async (body, _urlParams, _queryParams)  =>
  await new AxiosHttpClient("post", {}).request({
    data: body,
    url: `/api/proposta?boletoId=${_urlParams?.boletoId}`,
  });

export default insertInstallments
