const TeamSchema = mongoose.Schema ({
    name: {
        type: String,
    
    },
    number: {
        type: int
    }
  
 })

 const Team = teamSchema.models('team', teamSchema)
 module.exports = Team
