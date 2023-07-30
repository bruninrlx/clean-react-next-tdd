import axios from 'axios'
import useSWR from 'swr'

export default function useFetch<Data = any, Error = any>(url: string, polling?: number) {
  const { data, error, mutate } = useSWR<Data, Error>(
    url,
    async (url) => {
      const response = await axios.get(url)
      return response.data
    },
    {
      revalidateOnReconnect: true,
      refreshInterval: !polling ? 0 : polling,
    }
  )

  return { data, error, mutate, isLoading: !error && !data }
}
