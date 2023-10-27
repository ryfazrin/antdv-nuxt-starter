/**
 * BASE URL
 */
const BASE_URL = 'https://reqres.in/api'

/**
 * ENDPOINTS
 */
const LOGIN = '/login'
const REGISTER = '/register'
const FETCH_COLORS = (params = ''): string => `/unknown${params}`
const FETCH_USERS = (params = ''): string => `/users${params}`

export {
  BASE_URL,
  LOGIN,
  REGISTER,
  FETCH_COLORS,
  FETCH_USERS,
}
