import axios from 'axios'
import { useMutation, useQueryClient } from '@tanstack/vue-query'

const useCreateUser = () => {
  const queryClient = useQueryClient()

  const mutationQuery = useMutation({
    mutationFn: (data: any) => axios.post(
      'https://reqres.in/api/users',
      data,
    ),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({ queryKey: ['USERS'] })
      Modal.success({
        content: 'Berhasil Create data!',
      })
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onError(error: any, variables, context) {
      Modal.error({
        title: 'Gagal Create data!',
        content: error,
      })
    },
  })

  const handleCreate = (name: string, job: string) => {
    mutationQuery.mutate({
      name,
      job,
    })
  }

  return {
    mutationQuery,
    handleCreate,
  }
}

export default useCreateUser
