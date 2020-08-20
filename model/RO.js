const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MULTIDB', {useNewUrlParser: true}, (err) => {
if (!err) {
console.log('Successfully Established Connection with MongoDB')
}
else {
console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
}
});


const history = new mongoose.Schema({
   
            ConfigVersionID: String,
            LastOrderStatus: Number,
            OperationalStatus: Number,
            StartTime: String,
            StopTime: String
 
 });



const containerlist = new mongoose.Schema({
   
 //

});


const ResourceO = new mongoose.Schema ({



        BlockID: String,
        BlockType: Number,
        HistoryAction:
          {
            type: [history], default: null 
          },
        ID: String,
        IndexReferenceKey: String,
        IndexSort: Number,
        ListContainer: { type: containerlist, default: null },
        ProcessType: Number,
        StructType: Number,
        TxID: String,
        UserID: String,
        version: String
      



})

const RO = mongoose.model("RO", ResourceO);


module.exports = RO;
