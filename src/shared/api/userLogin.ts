import { UserData } from '../userDataValidation'
import { ApiUserResp } from './apiDatatypes'

export const userLogin = async (data: UserData): Promise<ApiUserResp> => {
  console.log('userLogin', data)
  return {
    status: false,
    message: 'User loged in',
    data: {},
  }
}

