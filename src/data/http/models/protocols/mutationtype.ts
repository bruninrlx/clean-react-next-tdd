import { Response } from '../http'
import { RequestBody, RequestUrlParams } from './requestParams'

export type Mutation = (
  body?: RequestBody,
  urlParams?: RequestUrlParams,
  queryParams?: RequestUrlParams
) => Promise<Response>
