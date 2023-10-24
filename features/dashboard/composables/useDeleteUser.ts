import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { deleteUser } from '~/shared/api/mutation/user'

const useDeleteUser = () => {
  const queryClient = useQueryClient()

  const mutationQuery = useMutation(
    deleteUser,
    {
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
    },
  )

  const handleOnDelete = (id: number) => {
    mutationQuery.mutate(id)
  }

  return {
    mutationQuery,
    handleOnDelete,
  }
}

export default useDeleteUser
