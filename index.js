// import serverHandle from './src/app'

const http = require('http')
const serverHandle = require('./src/app')
const server = http.createServer(serverHandle)
server.listen('4789', () => {
  console.log('running on localhost:4789')
})