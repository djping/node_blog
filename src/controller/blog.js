const getList = (author, title) => {
  return [
    {
      id: 1,
      author: 'lishi',
      content: 'first article',
      createdTime: 1559872607784,
      title: 'AAA'
    }, {
      id: 2,
      author: 'djping',
      content: 'second article',
      createdTime: 1559872637025,
      title: 'BBB'
    }
  ]
}
const getDetail = (id) => {
  return [
    {
      id: 1,
      author: 'lishi',
      content: 'first article',
      createdTime: 1559872607784,
      title: 'AAA'
    }
  ]
}

const newBlog = (blogData = {}) => {
  return {
    id: 3
  }
}

const updateBlog = (id, blogData = {}) => {
  console.log('update', blogData)
  return true
}

const deleteBlog = (id) => {
  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
}