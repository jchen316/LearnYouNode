
//My First I/O!

// const fs = require('fs');
// let file = fs.readFileSync(process.argv[2]).toString();
// let arr = file.split("\n");
// console.log(arr.length - 1);

//MY First ASYNC I/O
// const fs = require('fs');

// const callback = (err, data) => {
//   if(err){
//     throw err;
//   } else {
//     let arr = data.toString().split("\n")
//     console.log(arr.length - 1)
//   }
// }

// fs.readFile(process.argv[2], callback)

//FILTERED LS
// const fs = require('fs');
// const callback = (err, data) => {
//   if(err){
//     console.log(err);
//   } else {
//     let check = "." + process.argv[3]
//     for(let i = 0; i<data.length; i++){
//       if(data[i].includes(check)){
//         console.log(data[i])
//       }
//     }
//   }
// }
// fs.readdir(process.argv[2], callback)

//MAKE IT MODULAR
// const myModule = require('./modular')
// const fs = require('fs')

// const callback = (err, data) => {
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// }
// myModule(process.argv[2], process.argv[3], callback)

//HTTP CLIENT
// const http = require('http')
// const callback = (response) => {
//   response.on("data", function (data){
//     console.log(data.toString())
//   })
// }

// http.get(process.argv[2], callback)


//HTTP Collect 
// const http = require('http')

// const callback = (res) => {
//   let storage = ""
//   let num = 0

//   res.on('data', (chunk) => {
//       storage += chunk;
//   });
  
//   res.on('end', () => {
//       num = storage.length;
//       console.log(num)
//       console.log(storage.toString());
//   });
// }

// http.get(process.argv[2], callback)

//JUGGLING ASYNC 
// const http = require('http')

// const cheater = () => {
//   let counter = 0
//   let arr = []
//   let timer = 0

//   const callback = (res) => {
//       let storage = ""
//       let num = counter;
//       counter++
      
//       res.on('data', (chunk) => {
//           storage += chunk;
//       });
      
//       res.on('end', () => {
//           arr[num] = storage.toString()
//           timer++
//           if(timer === 3){
//             arr.forEach( (entry)=> {
//               console.log(entry)
//             })
//           }
//       });
//     }
    
//   http.get(process.argv[2], callback)
//   http.get(process.argv[3], callback)
//   http.get(process.argv[4], callback)
  

// }

// cheater();

//Timer Server
// const net = require('net')
// const server = net.createServer(function listener(socket){
//   const format = (num) => {
//     if(num < 10) {
//       return num = "0" + num;
//     } else {
//       return num
//     }
//   }

//   let date = new Date();
//   let year = date.getFullYear();
//   let month = format(date.getMonth()+1) ;
//   let day = format(date.getDate());
//   let hour = format(date.getHours());
//   let min = format(date.getMinutes());


//   let data = `${year}-${month}-${day} ${hour}:${min}`


//   // socket.write(data)

//   socket.end(data + "\n")
// })

// server.listen(process.argv[2])

//HTTP FILE Server

// const http = require('http')
// const fs = require('fs')

// const server = http.createServer( function (req, res)  {
//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(process.argv[2])

//HTTP UpperCaser

const http = require("http")
const fs = require('fs')
const map = require('through2-map')

const server = http.createServer( function (req, res) {
  if(req.method === "POST"){
    req.pipe(map(function (chunk){
      return chunk.toString().toUpperCase()
    })).pipe(res)
  }
})

server.listen(process.argv[2])