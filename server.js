const http = require("http");

const PORT = 8080;

http.createServer((req,res)=>{
res.end("App Platform Working Now");
}).listen(PORT, ()=>{
console.log("Server running on port " + PORT);
});
