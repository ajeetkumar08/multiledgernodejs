const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MULTIDB', {useNewUrlParser: true}, (err) => {
if (!err) {
console.log('Successfully Established Connection with MongoDB')
}
else {
console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
}
});


const Notification = new mongoose.Schema({
   
  // LastOrderStatusResourceGroup: Number,
  // ResourceGroupID: String

});

const ListResourceGroup = new mongoose.Schema({
   
  LastOrderStatusResourceGroup: Number,
  ResourceGroupID: String

});




const PaymentInformationschema = new mongoose.Schema ({

    AppConfig: String,
    BlockID: String,
    BlockType: Number,
    CertificateStatus: String,
    DateOfCreation: String,                              //"12/07/2020, 10:48PM",
    FIDOPublicKey: String,
    FIDOStatus: String,
    FirstName: String,
    ID: String,
    IndexSort: Number,
    LastModifiedDate: String,
    LastName: String,
    LastOrderResourceGroupListID: Number,
    LastOrderStatus: Number,
    LastOrderStatusAuthentication: Number,
    LastOrderStatusProcessListID: Number,
    ListNotification: { type: [Notification], default: null },
    ListResourceGroupID: { type: [ListResourceGroup], default: null },
    PW: String,
    PhoneNumber: String,
    PrivateKeyStatus: String,
    ProcessListID: String,
    ProcessType: Number,
    ResourceGroupListID: String,
    StatusDescription: String,
    StructType: Number,
    TxID: String,
    UserEmail: String,
    UserID: String,
    ValidateStatus: Number,
    version: String
  })

const PI = mongoose.model("PI", PaymentInformationschema);



module.exports = PI;
