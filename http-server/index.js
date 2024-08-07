
const http = require('http')
const fs = require('fs')

const myServer = http.createServer((req, res) => {
    console.log('server is created')
    fs.appendFile('userlog.txt', '\nlog details', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
        }
    })
    res.end('Hello user from server')
})
myServer.listen(8000, () => {
    console.log('server started')
})
