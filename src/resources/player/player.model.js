const PlayerSchema = mongoose.Schema ({
    firstName: {
        type: String,
        
    },
    middleName: {      
     type: String,
        
     },
    lastName: {
        type: String,
         
  },
  nickName: {
    type: String,
  }

  
 })

 const Player = playerSchema.models('player', playerSchema)
 module.exports = Player
