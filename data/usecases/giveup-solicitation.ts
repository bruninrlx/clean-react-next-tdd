import { AxiosHttpClient } from "../../infra/http/axios-http-client";
import { Mutation } from "../models/mutationtype";

export const giveupSolicitation:Mutation = async (body)  =>
  await new AxiosHttpClient("post", {}).request({
    data: body,
    url: "/api/desistencia",
  });
