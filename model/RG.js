const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MULTIDB', {useNewUrlParser: true}, (err) => {
if (!err) {
console.log('Successfully Established Connection with MongoDB')
}
else {
console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
}
});

const vmlist = new mongoose.Schema({
   
  DateOfCreation: String,
  DeleteDate: String,
  ID: String,
  LastOrderStatus: Number,
  Name: String
 
 });



const Resourcegroupschema = new mongoose.Schema ({

        
        BlockID: String,
        BlockType: Number,
        CordaID: String,
        FabricID: String,
        FrameWorkType: Number,
        ID: String,
        IndexReferenceKey: String,
        IndexSort: Number,
        LastOrderStatus: Number,
        ListVM: 
          {
            type: [vmlist], default: null 
          },
        ProcessType: Number,
        QuorumID: String,
        StructType: Number,
        TxID: String,
        UserEmail: String,
        UserID: String,
        version: String
      



})

const RG = mongoose.model("RG", Resourcegroupschema);


module.exports = RG;