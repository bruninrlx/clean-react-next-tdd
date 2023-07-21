import { Response } from "../protocols/http";
import { RequestBody, RequestUrlParams } from "./requestParams";

export type Mutation = (
  body: RequestBody,
  urlParams?: RequestUrlParams,
  queryParams?: RequestUrlParams
) => Promise<Response>;

export type RequestParams = (
  urlParams?: RequestUrlParams,
  queryParams?: RequestUrlParams
) => Promise<Response>;