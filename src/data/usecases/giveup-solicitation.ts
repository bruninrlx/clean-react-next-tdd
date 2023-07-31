import { AxiosHttpClient } from '../http/client/axios-http-client'
import { Mutation } from '../http/models/protocols/mutationtype'

export const teste: Mutation = async (body) =>
  await new AxiosHttpClient('post', {}).request({
    data: body,
    url: 'http://localhost:3003/teste',
  })
