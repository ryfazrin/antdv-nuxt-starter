import axios from 'axios'
import { useMutation } from '@tanstack/vue-query'

const useLoginForm = () => {
  const token = useCookie('token')
  const user = useCookie('user')

  const mutationQuery = useMutation({
    mutationFn: (data: any) => axios.post(
      'https://reqres.in/api/login',
      data,
    ),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSuccess(data, variables, context) {
      notification.success({
        message: 'Berhasil Login!',
      })

      token.value = data.data?.token
      user.value = JSON.stringify(variables)

      navigateTo('/')
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onError(error: any, variables, context) {
      notification.error({
        message: 'Gagal Login!',
        description: error,
        duration: 4,
      })
    },
  })

  const handleLogin = (email: string, password: string) => {
    mutationQuery.mutate({
      email,
      password,
    })
  }

  return {
    mutationQuery,
    handleLogin,
  }
}

export default useLoginForm
