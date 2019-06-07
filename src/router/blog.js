const { getList, 
        getDetail, 
        newBlog,
        updateBlog,
        deleteBlog 
      } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const blogRouter = (req, res) => {
  const id = req.query.id || ''
  const method = req.method
  // !!! long time to slove'path'
  console.log('path', req.path)
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const detailData = getDetail(id)
    return new SuccessModel(detailData)
  }  
  // api/blog/list-del-detail-update-new user/login
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || ''
    const title = req.query.title || ''
    const listData = getList(author, title)
    return new SuccessModel(listData)
  }

  if (method === 'POST' && req.path === '/api/blog/new') {
    const blogData = newBlog(req.body)
    return new SuccessModel(blogData)
  }

  if (method === 'POST' && req.path === '/api/blog/update') {
    const result = updateBlog(id, req.body)
    if (result) {
      return new SuccessModel('update success')
    }
  }

  if (method === 'POST' && req.path === '/api/blog/del') {
    const result = deleteBlog(id)
    if (result) {
      return new SuccessModel('delete success')
    }
  }
}

module.exports = blogRouter