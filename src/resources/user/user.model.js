 const mongoose = require('mongoose')

 const userSchema = mongoose.Schema ({
    firstName: {
        type: String,
        maxLength: 25,
    },
    middleName: {      
     type: String,
        maxLength: 25,
     },
    lastName: {
        type: String,
         maxLength: 25,
  }

  
 })

 const User= userSchema.models('user', userSchema)
 module.exports = User


 

 



 



 