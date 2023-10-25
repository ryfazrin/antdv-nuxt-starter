import axios from 'axios'
import type { CreateAxiosDefaults, AxiosInstance as InterfaceAxiosInstance } from 'axios'
import { BASE_URL } from '../constants/endpoint'

const AxiosInstanceConfig: CreateAxiosDefaults = {
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    'X-Custom-Header': 'foobar',
  },
  baseURL: BASE_URL,
}

const AxiosInstance: InterfaceAxiosInstance = axios.create(AxiosInstanceConfig)

export default AxiosInstance
