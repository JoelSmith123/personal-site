const connect = require('connect')
const serveStatic = require('serve-static')
const port = 3000

connect().use(serveStatic(__dirname)).listen(port, () => {
  console.log(`Server running on ${port}...`)
})