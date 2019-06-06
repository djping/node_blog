const blogRouter = (req, res) => {
  // const url = req.url
  const method = req.method
  // const path = url.split('?')[0]
  // !!! long time to slove'path'
  console.log('path', req.path)
  if (method === 'GET' && req.path === '/api/blog/detail') {
    return {
      msg: 'this is blog detail'
    }
  }  
}

module.exports = blogRouter