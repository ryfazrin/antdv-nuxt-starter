import { FETCH_USERS } from '~/shared/constants/endpoint'
import { getData } from '~/utils/http/axiosHelper'

interface Props {
  key: string[]
  api: () => Promise<any>
}

function fetchUsers(params: string): Props {
  const KEY = ['users', params]

  const API = async () => {
    const dataUsers = await getData({
      endpoint: FETCH_USERS(params),
    })

    return dataUsers?.data
  }

  return { key: KEY, api: API }
}

export {
  fetchUsers,
}
