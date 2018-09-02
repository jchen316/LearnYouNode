
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
const myModule = require('./modular')
const fs = require('fs')

const callback = (err, data) => {
  if(err){
    console.log(err)
  } else {
    console.log(data)
  }
}
myModule(process.argv[2], process.argv[3], callback)

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

//   const callback = (res) => {
//       let storage = ""
      
//       res.on('data', (chunk) => {
//           storage += chunk;
//       });
      
//       res.on('end', () => {
//           arr[counter] = storage.toString()
//       });
//     }
    
//     http.get(process.argv[2], callback)
//     http.get(process.argv[3], callback)
//     http.get(process.argv[4], callback)

// }

// cheater();
