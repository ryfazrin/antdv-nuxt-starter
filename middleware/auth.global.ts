import { checkIsAuthRoute, checkIsPrivateRoute } from '../utils/route'

export default defineNuxtRouteMiddleware((to, _from) => {
  const token = useCookie('token')

  if ((!token.value) && checkIsPrivateRoute(to.path)) return navigateTo('/auth/login')

  if (token.value && checkIsAuthRoute(to.path)) return navigateTo('/')

  // if (to.params.id === '1') {
  //   return abortNavigation()
  // }
  // // In a real app you would probably not redirect every route to `/`
  // // however it is important to check `to.path` before redirecting or you
  // // might get an infinite redirect loop
})
