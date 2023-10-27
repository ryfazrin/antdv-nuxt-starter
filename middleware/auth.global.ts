import { checkIsAuthRoute, checkIsPrivateRoute } from '../utils/route'

export default defineNuxtRouteMiddleware((to, _from) => {
  const token = useCookie('token')

  if ((!token.value) && checkIsPrivateRoute(to.path)) return navigateTo('/auth/login')

  if (token.value && checkIsAuthRoute(to.path)) return navigateTo('/')
})
