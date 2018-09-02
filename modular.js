const fs = require('fs')

module.exports = function (file, type, callback) {
  const callB = (err, data) => {
      if(err){
        return callback(err)
      }
       else {
        let check = "." + type
        for(let i = 0; i<data.length; i++){
          if(data[i].includes(check)){
            callback(null, data[i])
          }
        }
      }
    }
  fs.readdir(file, callB)

}