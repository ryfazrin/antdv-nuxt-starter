import { useQuery } from '@tanstack/vue-query'
import { modelUser } from '../models/model-user'
import { fetchUsers } from '~/shared/api/fetch/users'

export default function useGetList() {
  const page = ref(1)

  const fetchQuery = useQuery({
    queryKey: ['USERS', page],
    queryFn: async () => await fetchUsers(page.value),
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
