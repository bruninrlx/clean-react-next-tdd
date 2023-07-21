import { AxiosInstance } from 'axios';
import useSWR from 'swr'

export default function useFetch<Data = any, Error = any>(axiosCreate: AxiosInstance, url: string, polling?: number) {
  const { data, error, mutate } = useSWR<Data, Error>(url, async url => {
    const response = await axiosCreate.get(url);

    return response.data;
  }, {
    revalidateOnReconnect: true,
    refreshInterval: !polling ? 0 : polling
  })

  return { data, error, mutate, isLoading: !error && !data }
}