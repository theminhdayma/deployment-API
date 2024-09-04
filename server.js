const jsonServer = require("json-server")

// Tạo máy chủ
const server = jsonServer.create()

const router = jsonServer.router("db.json")

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

// Lắng nghe cổng của ứng dụng 
server.listen(3000, () => {
    console.log("http://localhost:3000");
})

module.exports = server
