var MongoClient = require('mongodb').MongoClient,
  test = require('assert');
// Connection url
var url = 'mongodb://localhost:27017/rrnote';
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
                    console.log(docs);
                    db.close();
                }
            });
        }
    });
   

});