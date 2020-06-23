const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

class MongoConnector {
  
  getAllMovies() {
    return new Promise((resolve,reject)=>{
      MongoClient.connect(url, function(err, db) {
        if (err) reject(err);
        var dbo = db.db("Movies");
      dbo.collection("movie_list")
       .find({})
       .toArray((err,result)=>{
         resolve(JSON.stringify(result));
        db.close();
      });

      });
    });


  }

  addMovie(movieInfo) {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("Movies");
      dbo.collection("movie_list").insertOne(movieInfo, function(err, res) {
        if (err) throw err;
        db.close();
      });
    });
  }
}

export default MongoConnector;