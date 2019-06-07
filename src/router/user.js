const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const userRouter = (req, res) => {
  if (req.method === 'POST' && req.path === '/api/user/login') {
    const { username, password } = req.body
    console.log('aaaa', username, password)
    const result = loginCheck(username, password)
    if (result) {
      return new SuccessModel('longin success')
    } else {
      return new ErrorModel('username or password wrong')
    }
  }
}
module.exports = userRouter
