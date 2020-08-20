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
   
    Actual_Value: Number,
    Provider: String,
    Resource_Name: String,
    Resource_Type: String,
    Status: String,
    VM_Resource_Config_ID: String,
    Value_per_Hour: Number,
    totalConsumption: Number
   });

var RFschema = new mongoose.Schema({


BlockID: String,
BlockType: Number,
Collected_At: String,
ID: String,
Index_Reference_Key: String,
IndexSort: Number,
Information_pack_id: String,
Key: String,
Objects: {
    type : [subSchema]
 },
ProcessType: Number,
StructType: Number,
TxID: String,
UserID: String,
Version: Number,
version: String
});

const RF = mongoose.model("RF", RFschema);

module.exports = RF;
