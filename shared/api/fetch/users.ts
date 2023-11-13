import { FETCH_USERS } from '~/shared/constants/endpoint'
import { getData } from '~/utils/http/axiosHelper'

// interface Props {
//   key: string[]
//   api: () => Promise<any>
// }

// function fetchUsers(params: string): Props {
//   console.log('call api')
//   const KEY = ['USERS', params]

//   const API = async () => {
//     const dataUsers = await getData({
//       endpoint: FETCH_USERS(params),
//     })

//     return dataUsers?.data
//   }

//   return { key: KEY, api: API }
// }

async function fetchUsers(page: number, per_page: number) {
  const dataUsers = await getData({
    endpoint: FETCH_USERS(paramsToString({
      page,
      per_page,
    })),
  })

  return dataUsers?.data
}

export {
  fetchUsers,
}
