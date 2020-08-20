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
   
  ResourceGroupName: String,
  actualValue: Number,
  lastOrderStatus: String,
  resourceGroupID: String


});



var ISschema = new mongoose.Schema({

 
    BlockID: String,
    BlockType: Number,
    ID: String,
    IndexReferenceKey: String,
    IndexSort: Number,
    ProcessType: Number,
    StructType: Number,
    TxID: String,
    UserID: String,
    actualvalue: Number,
    endDate: String,
    key: String,
    resourceGroupList: 
        {
         type: [subSchema],
        },
    startDate: String,
    version: String
  
});
 
const IS = mongoose.model("IS", ISschema);

module.exports = IS;
