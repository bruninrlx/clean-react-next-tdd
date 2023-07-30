import { AxiosHttpClient } from '../infra/http/axios-http-client'
import { Mutation } from '../models/protocols/mutationtype'

export const teste: Mutation = async (body) =>
  await new AxiosHttpClient('post', {}).request({
    data: body,
    url: 'http://localhost:3003/teste',
  })
