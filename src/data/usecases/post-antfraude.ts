import { AxiosHttpClient } from '../infra/http/axios-http-client'
import { Mutation } from '../models/protocols/mutationtype'

export const postantfraude: Mutation = async (body, urlParams, _queryParams) =>
  await new AxiosHttpClient('post', {}).request({
    url: `/api/antfraude?boletoId=${urlParams?.boletoId}&creditoId=${urlParams?.creditoId}`,
    data: body,
  })
