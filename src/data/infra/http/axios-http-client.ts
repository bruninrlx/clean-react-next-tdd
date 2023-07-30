import axios, { AxiosError } from 'axios'
import { HttpClient, HttpMethod, HttpRequest, Response } from '../../models/http'

export class AxiosHttpClient implements HttpClient {
  constructor(private readonly method: HttpMethod, private readonly headers: any) {}
  async request({ data, url, params }: HttpRequest): Promise<Response> {
    try {
      const axiosResponse = await axios.request({
        url,
        method: this.method,
        data,
        headers: this.headers,
        params,
      })
      return { response: axiosResponse, axiosErrorResponse: undefined, error: undefined }
    } catch (error) {
      const err = (error as AxiosError) || Error
      return err.response
        ? { response: undefined, axiosErrorResponse: err.response, error: undefined }
        : { response: undefined, axiosErrorResponse: undefined, error: err }
    }
  }
}
