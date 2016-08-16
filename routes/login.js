var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

// Connection url
var url = 'mongodb://localhost:27017/rrnote';

router.get('/', function(req, res, next) {
    // Connect using MongoClient
MongoClient.connect(url, function(err, db) {
//  // Create a collection we want to drop later
//   var adminDb = db.admin();
//   // List all the available databases
//   adminDb.listDatabases(function(err, dbs) {
//     test.equal(null, err);
//     test.ok(dbs.databases.length > 0);
//     console.log(dbs);
//     db.close();
//   });


    var col = db.collection("user",function (error,collection) {
        if (error) {  
            throw error;
        }else{
            collection.find({}).toArray(function(err,docs){
                if(err) throw  err;
                else{
                    res.send(docs);
                    console.log(docs);
                    db.close();
                }
            });
        }
    });
   

});
  
});

module.exports = router;




