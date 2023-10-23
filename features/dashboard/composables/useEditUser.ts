import axios from 'axios'
import { useMutation, useQueryClient } from '@tanstack/vue-query'

const useEditUser = () => {
  const queryClient = useQueryClient()

  const mutationQuery = useMutation({
    mutationFn: ({ data, id }: { data: any; id: number }) => axios.put(
      `https://reqres.in/api/users/${id}`,
      data,
    ),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({ queryKey: ['USERS'] })
      Modal.success({
        content: 'Berhasil Edit data!',
      })
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onError(error: any, variables, context) {
      Modal.error({
        title: 'Gagal Edit data!',
        content: error,
      })
    },
  })

  const handleEdit = ({ data, id }: { data: any; id: number }) => {
    mutationQuery.mutate({ data, id })
  }

  return {
    mutationQuery,
    handleEdit,
  }
}

export default useEditUser
