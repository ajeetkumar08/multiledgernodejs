var PL = require('../model/PL.js');
var PM = require('../model/PM.js');
var IL = require('../model/IL.js');
var IS = require('../model/IS.js');
var PI = require('../model/PI.js');
var PT = require('../model/PT.js');
var RC = require('../model/RC.js');
var RF = require('../model/RF.js');
var RG = require('../model/RG.js');
var RL = require('../model/RL.js');
var RO = require('../model/RO.js');

const dot = require('dot-object');
const mongoose = require('mongoose');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));



app.get("/",function(req,res){
    res.send("Hello");
    
})

function getTimeStamp() {
  let ts = Date.now();
  return Math.floor(ts/1000);
}



// -------------------------------- create PM ----------------------------------

     
app.post("/createPM", function(req,res){
    
  var pid = "PM" + getTimeStamp();

  const newPM = new PM ({

    BlockID: req.body.BlockID,
    BlockType: req.body.BlockType,
    ID: pid,
    IndexSort: req.body.IndexSort,
    ProcessType: req.body.ProcessType,
    StructType: req.body.StructType,
    TxID: req.body.TxID,
    UserID: req.body.UserID,
    gatewayInstrumentIdentifierID: req.body.gatewayInstrumentIdentifierID,
    indexReferenceKey: req.body.indexReferenceKey,
    lastOrderStatus: req.body.lastOrderStatus,
    paymentMethodID: req.body.paymentMethodID,
    status: req.body.status,
    version: req.body.version
  });


  newPM.save(function(err){
      if (err){
        console.log(err);
      }
      else{
      console.log("Data saved Successfully");
        }
      });
});



// -------------------------------- create PL ----------------------------------

app.post('/createPL', function(req, res){

  var pid = "PL" + getTimeStamp();


  const newPL = new PL ({

    BlockID: req.body.BlockID,
    BlockType: req.body.BlockType,
    ID: pid,
    IndexReferenceKey: req.body.IndexReferenceKey,
    IndexSort: req.body.IndexSort,
    ListProcess: req.body.ListProcess,
    ProcessType: req.body.ProcessType,
    StructType: req.body.StructType,
    TxID: req.body.TxID,
    UserID: req.body.UserID,
    version: req.body.version


  });


  newPL.save(function(err){
      if (err){
        console.log(err);
      }
      else{
        res.send(newPL);
      console.log("Data saved Successfully");
        }
      });
});


// -------------------------------- create IL ----------------------------------

app.post('/createIL', function(req, res){

  var pid = "IL" + getTimeStamp();


  const newIL = new IL ({

        // BlockID: req.body.BlockID,
        // BlockType: req.body.BlockType,
        // ID: pid,
        // IndexReferenceKey: req.body.IndexReferenceKey,
        // IndexSort: req.body.IndexSort,
        // Invoices: {
        //   invoiceId: req.body.Invoices.invoiceId,
        //   lastOrderStatus: req.body.Invoices.lastOrderStatus,
        //   status: req.body.Invoices.status
              
        //  },
        // ProcessType: req.body.ProcessType,
        // StructType: req.body.StructType,
        // TxID: req.body.TxID,
        // UserID: req.body.UserID,
        // key: req.body.key,
        // version: req.body.version
        BlockID: req.body.BlockID,
        BlockType: req.body.BlockType,
        ID: pid,
        IndexReferenceKey: req.body.IndexReferenceKey,
        IndexSort: req.body.IndexSort,
        Invoices: req.body.Invoices,
        ProcessType: req.body.ProcessType,
        StructType: req.body.StructType,
        TxID: req.body.TxID,
        UserID: req.body.UserID,
        key: req.body.key,
        version: req.body.version

  });


  newIL.save(function(err){
      if (err){
        console.log(err);
      }
      else{
        res.send(newIL);
      console.log("Data saved Successfully");
        }
      });
});


// -------------------------------- create IS ----------------------------------

app.post('/createIS', function(req, res){

  var pid = "IS" + getTimeStamp();


  const newIS = new IS ({

    BlockID: req.body.BlockID,
    BlockType: req.body.BlockType,
    ID: pid,
    IndexReferenceKey: req.body.indexReferenceKey,
    IndexSort: req.body.IndexSort,
    ProcessType: req.body.ProcessType,
    StructType: req.body.StructType,
    TxID: req.body.TxID,
    UserID: req.body.UserID,
    actualvalue: req.body.actualvalue,
    endDate: req.body.endDate,
    key: req.body.key,
    resourceGroupList: req.body.resourceGroupList,
    startDate: req.body.startDate,
    version: req.body.version

  });

  newIS.save(function(err){
      if (err){
        console.log(err);
      }
      else{
        res.send(newIS);
      console.log("Data saved Successfully");
        }
      });
});


// -------------------------------- create PI ----------------------------------

app.post('/createPI', function(req, res){

  var pid = "PI" + getTimeStamp();


  const newPI = new PI ({

    AppConfig: req.body.AppConfig,
    BlockID: req.body.BlockID,
    BlockType: req.body.BlockType,
    CertificateStatus: req.body.CertificateStatus,
    DateOfCreation: req.body.DateOfCreation,                              //"12/07/2020, 10:48PM",
    FIDOPublicKey: req.body.FIDOPublicKey,
    FIDOStatus: req.body.FIDOStatus,
    FirstName: req.body.FirstName,
    ID: pid,
    IndexSort: req.body.IndexSort,
    LastModifiedDate: req.body.LastModifiedDate,
    LastName: req.body.LastName,
    LastOrderResourceGroupListID: req.body.LastOrderResourceGroupListID,
    LastOrderStatus: req.body.LastOrderStatus,
    LastOrderStatusAuthentication: req.body.LastOrderStatusAuthentication,
    LastOrderStatusProcessListID: req.body.LastOrderStatusProcessListID,
    ListNotification: req.body.ListNotification,
    ListResourceGroupID: req.body.ListResourceGroupID,
    PW: req.body.PW,
    PhoneNumber: req.body.PhoneNumber,
    PrivateKeyStatus: req.body.PrivateKeyStatus,
    ProcessListID: req.body.ProcessListID,
    ProcessType: req.body.ProcessType,
    ResourceGroupListID: req.body.ResourceGroupListID,
    StatusDescription: req.body.StatusDescription,
    StructType: req.body.StructType,
    TxID: req.body.TxID,
    UserEmail: req.body.UserEmail,
    UserID: req.body.UserID,
    ValidateStatus: req.body.ValidateStatus,
    version: req.body.version
  });

  newPI.save(function(err){
      if (err){
        console.log(err);
      }
      else{
        res.send(newPI);
      console.log("Data saved Successfully");
        }
      });
});



// -------------------------------- create PT ----------------------------------

app.post('/createPT', function(req, res){

  var pid = "PT" + getTimeStamp();


  const newPT = new PT ({

    BlockID: req.body.BlockID,
    BlockType: req.body.BlockType,
    ID: pid,
    IndexReferenceKey: req.body.IndexReferenceKey,
    IndexSort: req.body.IndexSort,
    ProcessType: req.body.ProcessType,
    StructType: req.body.StructType,
    TxID: req.body.TxID,
    UserID: req.body.UserID,
    paymentMethodList: req.body.paymentMethodList,
    paymentMethods: req.body.paymentMethods,
    version: req.body.version
  });

  newPT.save(function(err){
      if (err){
        console.log(err);
      }
      else{
        res.send(newPT);
      console.log("Data saved Successfully");
        }
      });
});


// -------------------------------- create RC ----------------------------------

app.post('/createRC', function(req, res){

  var pid = "RC" + getTimeStamp();


  const newRC = new RC ({

        BlockID: req.body.BlockID,
        BlockType: req.body.BlockType,
        ID: pid,
        IndexReferenceKey: req.body.IndexReferenceKey,
        IndexSort: req.body.IndexSort,
        ListConfig: req.body.ListConfig,
        // ListConfig: [
        //   {
        //     BackUp: req.body.BackUp,
        //     BackupHash: req.body.BackupHash,
        //     CIDR: req.body.CIDR,
        //     ConfigVersionID: req.body.ConfigVersionID,
        //     DHCP: req.body.DHCP,
        //     ExternalIP: req.body.ExternalIP,
        //     FrameWorkType: req.body.FrameWorkType,
        //     InternalIP: req.body.InternalIP,
        //     KeyManagedByHSM: req.body.KeyManagedByHSM,
        //     KeyName: req.body.KeyName,
        //     LastModifiedDate: req.body.LastModifiedDate,
        //     LastOrderStatus: req.body.LastOrderStatus,
        //     LivenessTest: req.body.LivenessTest,
        //     Location: req.body.Location,
        //     Memory: req.body.Memory,
        //     Name: req.body.Name,
        //     OperationSystem: req.body.OperationSystem,
        //     Provider: req.body.Provider,
        //     ProviderID: req.body.ProviderID,
        //     Setup: req.body.Setup,
        //     Type: req.body.Type,
        //     VCPUs: req.body.VCPUs
        //   }
        // ],
        ListContainer: req.body.ListContainer,
        OperationalStateID: req.body.OperationalStateID,
        ProcessType: req.body.ProcessType,
        StructType: req.body.StructType,
        TxID: req.body.TxID,
        UserID: req.body.UserID,
        VMStatus: req.body.VMStatus,
        version: req.body.version


  });

  newRC.save(function(err){
      if (err){
        console.log(err);
      }
      else{
        res.send(newRC);
      console.log("Data saved Successfully");
        }
      });
});


// -------------------------------- create RF ----------------------------------

app.post('/createRF', function(req, res){

  var pid = "RF" + getTimeStamp();


  const newRF = new RF ({

    BlockID: req.body.BlockID,
    BlockType: req.body.BlockType,
    Collected_At: req.body.Collected_At,
    ID: pid,
    Index_Reference_Key: req.body.IndexReferenceKey,
    IndexSort: req.body.IndexSort,
    Information_pack_id: req.body.Information_pack_id,
    Key: req.body.key,
    Objects: req.body.Objects,
    ProcessType: req.body.ProcessType,
    StructType: req.body.StructType,
    TxID: req.body.TxID,
    UserID: req.body.UserID,
    Version: req.body.Version,
    version: req.body.version
  });


  newRF.save(function(err){
      if (err){
        console.log(err);
      }
      else{
        res.send(newRF);
      console.log("Data saved Successfully");
        }
      });
});



// -------------------------------- create RG ----------------------------------

app.post('/createRG', function(req, res){

  var pid = "RG" + getTimeStamp();


  const newRG = new RG ({

    BlockID: req.body.BlockID,
    BlockType: req.body.BlockType,
    CordaID: req.body.CordaID,
    FabricID: req.body.FabricID,
    FrameWorkType: req.body.FrameWorkType,
    ID: pid,
    IndexReferenceKey: req.body.IndexReferenceKey,
    IndexSort: req.body.IndexSort,
    LastOrderStatus: req.body.LastOrderStatus,
    ListVM: req.body.ListVM,
    ProcessType: req.body.ProcessType,
    QuorumID: req.body.QuorumID,
    StructType: req.body.StructType,
    TxID: req.body.TxID,
    UserEmail: req.body.UserEmail,
    UserID: req.body.UserID,
    version: req.body.version

  });

  newRG.save(function(err){
      if (err){
        console.log(err);
      }
      else{
        res.send(newRG);
      console.log("Data saved Successfully");
        }
      });
});



// -------------------------------- create RL ----------------------------------

app.post('/createRL', function(req, res){

  var pid = "RL" + getTimeStamp();


  const newRL = new RL ({

    BlockID: req.body.BlockID,
    BlockType: req.body.BlockType,
    ID: pid,
    IndexReferenceKey: req.body.IndexReferenceKey,
    IndexSort: req.body.IndexSort,
    ListResourceGroup: req.body.ListResourceGroup,
    ProcessType: req.body.ProcessType,
    StructType: req.body.StructType,
    TxID: req.body.TxID,
    UserID: req.body.UserID,
    version: req.body.version
  });

  newRL.save(function(err){
      if (err){
        console.log(err);
      }
      else{
        res.send(newRL);
      console.log("Data saved Successfully");
        }
      });
});



// -------------------------------- create RO ----------------------------------

app.post('/createRO', function(req, res){

  var pid = "RO" + getTimeStamp();


  const newRO = new RO ({
        
    BlockID: req.body.BlockID,
    BlockType: req.body.BlockType,
    HistoryAction: req.body.HistoryAction,
    ID: pid,
    IndexReferenceKey: req.body.IndexReferenceKey,
    IndexSort: req.body.IndexSort,
    ListContainer: req.body.ListContainer,
    ProcessType: req.body.ProcessType,
    StructType: req.body.StructType,
    TxID: req.body.TxID,
    UserID: req.body.UserID,
    version: req.body.version
    
  });

  newRO.save(function(err){
      if (err){
        console.log(err);
      }
      else{
        res.send(newRO);
      console.log("Data saved Successfully");
        }
      });
});











// -------------------------------- Update PI---------------------------------- 

app.post('/updatePI/:pid', function(req,res){

    pid = req.params.pid;
    PI.findOneAndUpdate(pid,req.body,function(err,result){
      if (err){
        res.send(err);
      }
      else{
        res.send(result);
        console.log("Data updated successfully");
      }
    })
})


// -------------------------------- Update PM--------------------------------- 

app.post('/updatePM/:pid', function(req,res){

  pid = req.params.pid;
  PM.findOneAndUpdate(pid,req.body,function(err,result){
    if (err){
      res.send(err);
    }
    else{
      res.send(result);
      console.log("Data updated successfully");
    }
  })
})



// -------------------------------- Update IL---------------------------------- 

app.post('/updateIL/:pid', function(req,res){

  pid = req.params.pid;
  IL.findOneAndUpdate(pid,req.body,function(err,result){
    if (err){
      res.send(err);
    }
    else{
      res.send(result);
      console.log("Data updated successfully");
    }
  })
})



// -------------------------------- Update IS---------------------------------- 

app.post('/updateIS/:pid', function(req,res){

  pid = req.params.pid;
  IS.findOneAndUpdate(pid,req.body,function(err,result){
    if (err){
      res.send(err);
    }
    else{
      res.send(result);
      console.log("Data updated successfully");
    }
  })
})



// -------------------------------- Update PL---------------------------------- 

app.post('/updatePL/:pid', function(req,res){

  pid = req.params.pid;
  PL.findOneAndUpdate(pid,req.body,function(err,result){
    if (err){
      res.send(err);
    }
    else{
      res.send(result);
      console.log("Data updated successfully");
    }
  })
})


// -------------------------------- Update PT---------------------------------- 

app.post('/updatePT/:pid', function(req,res){

  pid = req.params.pid;
  PT.findOneAndUpdate(pid,req.body,function(err,result){
    if (err){
      res.send(err);
    }
    else{
      res.send(result);
      console.log("Data updated successfully");
    }
  })
})



// -------------------------------- Update RC---------------------------------- 

app.post('/updateRC/:pid', function(req,res){

  pid = req.params.pid;
  RC.findOneAndUpdate(pid,req.body,function(err,result){
    if (err){
      res.send(err);
    }
    else{
      res.send(result);
      console.log("Data updated successfully");
    }
  })
})



// -------------------------------- Update RF---------------------------------- 

app.post('/updateRF/:pid', function(req,res){

  pid = req.params.pid;
  RF.findOneAndUpdate(pid,req.body,function(err,result){
    if (err){
      res.send(err);
    }
    else{
      res.send(result);
      console.log("Data updated successfully");
    }
  })
})


// -------------------------------- Update RG---------------------------------- 

app.post('/updateRG/:pid', function(req,res){

  pid = req.params.pid;
  RG.findOneAndUpdate(pid,req.body,function(err,result){
    if (err){
      res.send(err);
    }
    else{
      res.send(result);
      console.log("Data updated successfully");
    }
  })
})



// -------------------------------- Update RL---------------------------------- 

app.post('/updateRL/:pid', function(req,res){

  pid = req.params.pid;
  RL.findOneAndUpdate(pid,req.body,function(err,result){
    if (err){
      res.send(err);
    }
    else{
      res.send(result);
      console.log("Data updated successfully");
    }
  })
})



// -------------------------------- Update RO---------------------------------- 

// app.post('/updateRO/:pid', function(req,res){

//   pid = req.params.pid;
//   RO.findOneAndUpdate(pid,req.body,function(err,result){
//     if (err){
//       res.send(err);
//     }
//     else{
//       res.send(result);
//       console.log("Data updated successfully");
//     }
//   })
// })





app.post('/updateRO', function (req, res) {
  var pid = req.body.pid;
  console.log("",req.body)
  //RO.findByIdAndUpdate({
  //query: {ID: pid},
  //update: {$push: {HistoryAction: req.body}},
  //new: true});
  RO.find({"$HistoryAction.$.ConfigVersionID": "9999" }, function (err, ress) {
    console.log("notFound",err)
    if (err) throw err;
    console.log("err",err)
    console.log("res",ress)
    //res.status(200).send('OK')
    // if (err != null) {

         });
  });
 











// -------------------------------- Update RO---------------------------------- 

// app.post('/updateRO/:pid', function(req,res){

//   pid = req.params.pid;
 
//  const obj = req.body;
 
//  const dotobj = dot.dot(obj);
//  console.log(dotobj); 

//   RO.findOneAndUpdate( {ID: pid }, {$push: {dotobj}} , {new: true} ,function(err,result){
//     if (err){
//       res.send(err);
//     }
//     else{
//       res.send(result)
//       console.log("Data updated successfully");
//     }
//   })
// })

// -------------------------------- Update RO---------------------------------- 

app.patch('/updateRO/:pid', function(req,res){

  pid = req.params.pid;
  const obj = req.body;
//  const obj = {
//    HistoryAction:
//    {
//      LastOrderStatus: 2
//    }
//  }
 const dotobj = dot.dot(obj);
 console.log(dotobj); 

  RO.update( {ID: pid}, {$push: obj} ,function(err,result){
    if (err){
      res.send(err);
    }
    else{
      res.send(result);
      console.log("Data updated successfully");
    }
  })
})



//-------------------------------- Update RO---------------------------------- 

// app.patch('/updateRO/:pid', function(req,res){

//   pid = req.params.pid;
  
//   console.log(req.body); 
//    a = req.body;
  
//   //  for (x in a) {
//   //    console.log(a[x]);
//   //    console.log(x);
//   //  }


//    RO.findOne({ ID : pid }, function(error, ro) {
//         if (error || !ro) {
//           res.send({ error: error });          
//         } else {
//            // update the user object found using findOne
//           for (x in a) {
//           // console.log(ro.BlockType);
//            ro.x = a[x];   
//            console.log(x+ ":" + a[x]);
//             //console.log(a[x]);
//           }
//           ro.update(function (err,ro){
//             if (err) 
//             {
//               res.send(err);
//             }
//             else
//             res.send(ro);

//           })
            
// //         //    user.win = req.body.win;
// //         //    user.lose = req.body.lose;
// //         //    user.draw = req.body.draw;
// //         //    // now update it in MongoDB
// //         //    user.update(function (err, user) {
// //         //        if (err) res.json(err) {
// //         //            req.session.loggedIn = true;
// //         //        }
// //         //        res.redirect('/user/' + user.username);
           
//          }
//     });
//   });






module.exports = app;    