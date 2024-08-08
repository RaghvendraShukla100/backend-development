
const http = require('http')
const fs = require('fs')
var url = require('url')

const myServer = http.createServer((req, res) => {
  const myUrl = url.parse(req.url, true)
  console.log('Host Name : ',myUrl.hostname)
  res.end('Hello from server')
})

myServer.listen(8000, () => {
  console.log('server started')
})
