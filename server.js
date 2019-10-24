let app = require('express')()
let http = require('http').createServer(app)
let io = require('socket.io')(http)

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/public/index.html');
});

io.on('connection', socket => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg)
  })
})

const port = process.env.PORT || 3001;

http.listen(port, () => {
  console.log('listening on *:3001')
})