const ScoreSchema = mongoose.Schema ({
    Name: {
        type: String,
        
    },
    date_time: {      
     type: String,
        
     },
    point: {
        type: int,
         
  }
 })

 const Score = scoreSchema.models('score', scoreSchema)
 module.exports = Score
