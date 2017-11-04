require('appmetrics-dash').attach();
require('appmetrics-prometheus').attach();

const express = require('express');
const app = express();
const port = 3000;
app.set('view engine','ejs');
app.set('views',__dirname + '/public');
app.get('/',(req,res) => 
	res.render('index'));
var server = app.listen(port);
const io = require('socket.io')(server);
io.on('connect', onConnect);
server.listen(port, () => console.log('server listening on port ' + port));

function onConnect(socket){
  console.log('connect ' + socket.id);

  socket.on('disconnect', () => console.log('disconnect ' + socket.id));
}
