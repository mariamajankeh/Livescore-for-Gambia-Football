const divisionSchema = mongoose.Schema ({
    Name: {
        type: String,
        
    },
    number: {      
     type: int,
        
     }
    

  
 })

 const Division = divisionSchema.models('division', divisionSchema)
 module.exports = Division
