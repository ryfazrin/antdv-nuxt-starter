import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { updateUser } from '~/shared/api/mutation/user'

const useEditUser = () => {
  const queryClient = useQueryClient()

  const mutationQuery = useMutation(
    updateUser,
    {
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
    },
  )

  const handleEdit = ({ data, id }: { data: any; id: number }) => {
    mutationQuery.mutate({ data, id })
  }

  return {
    mutationQuery,
    handleEdit,
  }
}

export default useEditUser
