import { AUTH_ROUTES, PRIVATE_ROUTES } from '../shared/constants/path'

export const checkIsPrivateRoute = (currentRoute: string): boolean => {
  return Boolean(
    PRIVATE_ROUTES.includes(currentRoute),
  )
}

export const checkIsAuthRoute = (currentRoute: string): boolean => {
  return Boolean(
    AUTH_ROUTES.includes(currentRoute),
  )
}
