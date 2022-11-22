export type DataValidationResponse = {
  status: boolean
  message: string
}
export const dataValidation = (data: string): DataValidationResponse => {
  let response = {
    status: true,
    message: 'Data is valid',
  }
  if (data.match(/[а-яА-ЯёЁ]/g)) {
    response.status = false
    response.message = 'RU charecters do not supported'
  } else if (data.includes(`'`) || data.includes(`"`)) {
    response.status = false
    response.message = `Brackets are not alowed ( ' and " )`
  }
  return response
}

