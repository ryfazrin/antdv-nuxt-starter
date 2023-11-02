import { useQuery } from '@tanstack/vue-query'
import { modelUser } from '../models/model-user'
import { fetchUsers } from '~/shared/api/fetch/users'

export default function useGetList() {
  const page = ref(1)
  const per_page = ref(6)
  const total = ref(0)

  const fetchQuery = useQuery({
    queryKey: ['USERS', page, per_page],
    queryFn: async () => await fetchUsers(page.value, per_page.value),
    keepPreviousData: true,
  })

  const { data } = fetchQuery

  const dataModified = computed(() => {
    if (data.value) {
      total.value = data.value.total

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

  const handleChangePageSize = (newPageSize: number) => {
    per_page.value = newPageSize
  }

  return {
    fetchQuery,
    dataModified,
    handlePageChange,
    handleChangePageSize,
    total,
  }
}
