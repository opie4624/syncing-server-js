import { AuthResponse20161215 } from '../Auth/AuthResponse20161215'
import { AuthResponse20200115 } from '../Auth/AuthResponse20200115'

export type UpdateUserResponse = {
  success: boolean
  authResponse?: AuthResponse20161215 | AuthResponse20200115
}
