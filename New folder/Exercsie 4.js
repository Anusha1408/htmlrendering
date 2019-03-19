var http = require('http');
var fs=require('fs');
 var server =http.createServer((req,res) =>{

 if(req.url ==='/' || req.url ==='/home'){

   res.writeHead(200,{'Content-Type':'text/html'})
   var readHtml = fs.createReadStream(__dirname + '/index.html');
   readHtml.pipe(res);

 }
 else if (req.url ==='/contact'){
   res.writeHead(200,{'Content-Type':'text/html'})
 var readHtml = fs.createReadStream(__dirname + '/contact.html').pipe(res);
 //readHtml.pipe(res);
}

else if (req.url ==='/todos/itemName'){
  res.writeHead(200,{'Content-Type':'application/json'})
  todosObject =
  {
    id:1,
    item :'Attend class of Mern'
  };
res.end(JSON.stringify(todosObject));

//readHtml.pipe(res);

}
else
  {
    res.writeHead(404,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }


});

 server.listen(3000,'127.0.0.1');
 console.log('Listening to server 3000');
