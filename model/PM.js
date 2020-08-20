var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MULTIDB', {useNewUrlParser: true}, (err) => {
if (!err) {
console.log('Successfully Established Connection with MongoDB')
}
else {
console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
}
});


const PaymentMethodschema = new mongoose.Schema ({


BlockID: String,
BlockType: Number,
ID: String,
IndexSort: Number,
ProcessType: Number,
StructType: Number,
TxID: String,
UserID: String,
gatewayInstrumentIdentifierID: String,
indexReferenceKey: String,
lastOrderStatus: String,
paymentMethodID: String,
status: String,
version: String

})

const PM = mongoose.model("PM", PaymentMethodschema);


module.exports = PM;