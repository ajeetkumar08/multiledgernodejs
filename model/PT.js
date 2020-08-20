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
   
    LastOrderStatus: String,
    PaymentMethodID: String,
    cardHolderName: String,
    creditCardNumber: String,
    status: String

  });


const PaymentTransactionschema = new mongoose.Schema ({

   
BlockID: String,
BlockType: Number,
ID: String,
IndexReferenceKey: String,
IndexSort: Number,
ProcessType: Number,
StructType: Number,
TxID: String,
UserID: String,
paymentMethodList: String,
paymentMethods: 
    {
    type: [subSchema]
    },
version: String

})

const PT = mongoose.model("PT", PaymentTransactionschema);


module.exports = PT;
