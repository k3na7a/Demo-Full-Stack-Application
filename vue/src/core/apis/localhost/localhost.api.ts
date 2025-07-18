import axios, { AxiosInstance } from 'axios'

import { second } from '@/../../library/constants/time.constants'

import { authentication } from './authentication/auth.service'
import { administration } from './administration/admin.service'
import { settings } from './settings/settings.service'

const REFRESH_TOKEN_ID = 'localhost-refresh-token'

const instance: AxiosInstance = axios.create({
  baseURL: 'https://localhost:3000/api/',
  timeout: 10 * second,
  headers: { ['Content-Type']: 'application/json' }
})

class LocalhostAPI {
  public static authentication = new authentication(instance)
  public static administration = new administration(instance)
  public static settings = new settings(instance)
}

export { LocalhostAPI, REFRESH_TOKEN_ID }
