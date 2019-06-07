const querystring = require('querystring')

const blogRouter = require('./router/blog')
const userRouter = require('./router/user')

//利用promise异步处理提交上来的数据
const getPostData = function (req) {
  return new Promise((resolve, reject) => {
    if (req.method !== "POST") {
      console.log('this is test get')
      resolve({})
      return
    }
    if (req.headers['content-type'] !== 'application/json') {
      console.log('this is test content-type')
      resolve({})
      return
    }
    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      resolve(postData)
      console.log('postData: ', postData)
    })
  })
}

const serverHandle = (req, res) => {
  const url = req.url
  req.path = url.split('?')[0]
  req.query = querystring.parse(url.split('?')[1])
  res.setHeader('Content-type', 'application/json')

  getPostData(req).then(data => {
    req.body = JSON.parse(data)

    const blogData = blogRouter(req, res)
    if (blogData) {
      res.end(JSON.stringify(blogData))
      return
    }

    const userData = userRouter(req, res)
    if (userData) {
      res.end(JSON.stringify(userData))
      return
    }

    res.writeHead(404, {'Content-type': 'text/plain'})
    res.write('404 NOT FOUND!\n')
    res.end()
  })
}
module.exports = serverHandle
