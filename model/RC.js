const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MULTIDB', {useNewUrlParser: true}, (err) => {
if (!err) {
console.log('Successfully Established Connection with MongoDB')
}
else {
console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
}
});

const configlist = new mongoose.Schema({
   
            BackUp: Number,
            BackupHash: String,
            CIDR: String,
            ConfigVersionID: String,
            DHCP: Number,
            ExternalIP: String,
            FrameWorkType: Number,
            InternalIP: String,
            KeyManagedByHSM: Number,
            KeyName: String,
            LastModifiedDate: String,
            LastOrderStatus: Number,
            LivenessTest: Number,
            Location: Number,
            Memory: String,
            Name: String,
            OperationSystem: String,
            Provider: Number,
            ProviderID: String,
            Setup: String,
            Type: Number,
            VCPUs: String

});


const containerlist = new mongoose.Schema({
   
  ID:              String,                 
	Name:            String,                  
	CreatedDate:     String,                 
	Port:            String,                  
	Images:          String,                 
	Backup:          Number,               
	Status:          String,     
	BackupHash:      String,                  
	LastOrderStatus: String 
    
});


const RCschema = new mongoose.Schema ({

    
       
        BlockID: String,
        BlockType: Number,
        ID: String,
        IndexReferenceKey: String,
        IndexSort: Number,
        ListConfig: 
          {
            type: [configlist], default: null 
          },
        ListContainer: { type: [containerlist], default: null },
        OperationalStateID: String,
        ProcessType: Number,
        StructType: Number,
        TxID: String,
        UserID: String,
        VMStatus: Number,
        version: String
      




})

const RC = mongoose.model("RC",RCschema);


module.exports = RC;







