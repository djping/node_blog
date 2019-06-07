const loginCheck =  (username, password) => {
  if (username === 'djp' && password === '123') {
    return true
  } else {
    return false
  }
}

module.exports = {
  loginCheck
}
