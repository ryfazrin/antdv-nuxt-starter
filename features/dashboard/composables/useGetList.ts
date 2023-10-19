import { useQuery } from '@tanstack/vue-query'
import { modelUser } from '../models/model-user'

export default function useGetList() {
  const fetcher = (page: Ref<number>) =>
    fetch(
    `https://reqres.in/api/users?page=${page.value}&per_page=3`,
    ).then((response: any) => response.json())

  const page = ref(1)

  const fetchQuery = useQuery({
    queryKey: ['USERS', page],
    queryFn: () => fetcher(page),
    keepPreviousData: true,
  })

  const { data } = fetchQuery

  const dataModified = computed(() => {
    if (data.value) {
      return modelUser(
        data.value.data,
        data.value.per_page,
        page.value,
      )
    }
  })

  const handlePageChange = (newPage: any) => {
    page.value = newPage
  }

  return {
    fetchQuery,
    dataModified,
    handlePageChange,
  }
}
