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
   
    invoiceId: String,
    lastOrderStatus: String,
    status: String
  

  });

 

var ILschema = new mongoose.Schema({

    
        
        BlockID: String,
        BlockType: Number,
        ID: String,
        IndexReferenceKey: String,
        IndexSort: Number,
        Invoices: {
            type : [subSchema]
         },
        ProcessType: Number,
        StructType: Number,
        TxID: String,
        UserID: String,
        key: String,
        version: String
      
});
 
const IL = mongoose.model("IL", ILschema);

module.exports = IL;