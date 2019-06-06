const blogRouter = require('./router/blog')
const serverHandle = (req, res) => {
  const url = req.url
  req.path = url.split('?')[0]
  console.log('type', typeof url)

  res.setHeader('Content-type', 'application/json')
  const blogData = blogRouter(req, res)
  console.log('blogData', blogData)
  if (blogData) {
    res.end(JSON.stringify(blogData))
    return
  }
  res.writeHead(404, {'Content-type': 'text/plain'})
  res.write('404 NOT FOUND!\n')
  res.end()
  // console.log(blogData)
  // res.writeHeader(404)
}
module.exports = serverHandle
