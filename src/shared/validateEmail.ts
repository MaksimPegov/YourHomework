export const validateEmail = (input: string): boolean => {
  var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  if (input.match(validRegex)) {
    return true
  } else {
    return false
  }
}

