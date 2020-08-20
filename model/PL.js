const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost:27017/MULTIDB', {useNewUrlParser: true}, (err) => {
if (!err) {
console.log('Successfully Established Connection with MongoDB')
}
else {
console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
}
});



const processlist = new mongoose.Schema({
   
    // 
  
  });




const PaymentListchema = new mongoose.Schema ({


BlockID: String,
BlockType: Number,
ID: String,
IndexReferenceKey: String,
IndexSort: Number,
ListProcess: { type: [processlist], default: null },
ProcessType: Number,
StructType: Number,
TxID: String,
UserID: String,
version: String

})

const PL = mongoose.model("PL", PaymentListchema);


module.exports = PL;