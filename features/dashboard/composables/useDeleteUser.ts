import axios from 'axios'
import { useMutation, useQueryClient } from '@tanstack/vue-query'

const useDeleteUser = () => {
  const queryClient = useQueryClient()

  const mutationQuery = useMutation({
    mutationFn: (id: number) => axios.delete(`https://reqres.in/api/users/${id}`),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({ queryKey: ['USERS'] })
      Modal.success({
        content: 'Berhasil hapus data!',
      })
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onError(error: any, variables, context) {
      Modal.error({
        title: 'Gagal hapus data!',
        content: error,
      })
    },
  })

  const handleOnDelete = (id: number) => {
    mutationQuery.mutate(id)
  }

  return {
    mutationQuery,
    handleOnDelete,
  }
}

export default useDeleteUser
