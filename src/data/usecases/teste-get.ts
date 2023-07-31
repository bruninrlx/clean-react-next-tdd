import { AxiosHttpClient } from '../http/client/axios-http-client'
import { Mutation } from '../http/models/protocols/mutationtype'

const testeget: Mutation = async (body, _urlParams, _queryParams) =>
  await new AxiosHttpClient('get', {}).request({
    url: 'http://localhost:3003/teste',
  })

export default testeget
