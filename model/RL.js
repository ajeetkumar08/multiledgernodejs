const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MULTIDB', {useNewUrlParser: true}, (err) => {
if (!err) {
console.log('Successfully Established Connection with MongoDB')
}
else {
console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
}
});

const subSchema = new mongoose.Schema({

DeleteDate: String,
ID: String,
LastOrderStatus: Number,
Name: String,
Type: Number

});



const ResourceLschema = new mongoose.Schema ({


  BlockID: String,
  BlockType: Number,
  ID: String,
  IndexReferenceKey: String,
  IndexSort: Number,
  ListResourceGroup: 
    {
      type: [subSchema]  
    },
  
  
  ProcessType: Number,
  StructType: Number,
  TxID: String,
  UserID: String,
  version: String


})

const RL = mongoose.model("RL", ResourceLschema);



module.exports = RL;