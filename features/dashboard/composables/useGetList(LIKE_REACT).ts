import { useQuery } from '@tanstack/vue-query'
import { modelUser } from '../models/model-user'
import { paramsToString } from '~/utils/string'
import { getData } from '~/utils/http/axiosHelper'
import { FETCH_USERS } from '~/shared/constants/endpoint'

// File ~\shared\api\fetch\users.ts
interface Props {
  key: string[]
  api: () => Promise<any>
}

function fetchUsers(params: string): Props {
  const KEY = ['USERS', params]

  const API = async () => {
    const dataUsers = await getData({
      endpoint: FETCH_USERS(params),
    })

    return dataUsers?.data
  }

  return { key: KEY, api: API }
}

// =================================

// File ~\features\dashboard\composables\useGetList.ts
export default function useGetList() {
  const page = ref(1)

  const fetchQueryFn = computed(() => { // computed
    return fetchUsers(paramsToString({
      page: page.value,
      per_page: 3,
    }))
  })

  const fetchQuery = useQuery({
    queryKey: computed(() => fetchQueryFn.value.key), // computed
    queryFn: computed(() => fetchQueryFn.value.api), // computed
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
// ===================================================
