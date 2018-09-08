var express = require('express');
var app = express();
app.disable('x-powered-by'); // security caution, stops information being given
app.set('port', process.env.PORT || 8080);

app.use(express.static(__dirname+'/public'));
//app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res){
  //res.send('index.html')
  res.status(200).sendFile(__dirname + '/index.html');
// both work
});
app.listen(app.get('port'), function(){
  console.log('Website launched successfully on port: '+ app.get('port'))
});
