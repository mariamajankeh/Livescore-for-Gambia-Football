const LeagueSchema = mongoose.Schema ({
    Name: {
        type: String,
        
    },
    country: {      
     type: String,
        
     }
    

  
 })

 const League = leagueSchema.models('league', leagueSchema)
 module.exports = League
