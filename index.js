// const http = require('http');

// const requestListener = function (req, res) {
//   res.writeHead(200);
//   res.end('salut le monde');
// }

// const server = http.createServer(requestListener);
// server.listen(8080);



const express = require('express');
const app = express()

app.set('views','./views');
app.set('view engine', 'ejs');

app.use('/public',express.static('public'));

app.get('/', function(req,res){
  res.render('index')

})

app.get('/about',function(req,res){
  res.render('about')
})

app.get('/sys',function(req,res){
  res.render('sys')
})
app.get('/prev',function(req,res){
  res.render('prev')
})
app.get('/contact',function(req,res){
  res.render('contact')
})
app.get('/conn',function(req,res){
  res.render('connexion')
})
app.get('/ins',function(req,res){
  res.render('ins')
})


app.listen(8080, 
  () => console.log("server listening on port 8080")
);