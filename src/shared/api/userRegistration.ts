import { UserData } from '../userDataValidation'
import { ApiUserResp } from './apiDatatypes'

export const userRegistration = async (data: UserData): Promise<ApiUserResp> => {
  console.log('userRegistration', data)
  return {
    status: false,
    message: 'User registrated',
    data: {},
  }
}

