const {MongoClient} = require('mongodb');
var url = "mongodb+srv://ionut:florilor288@cluster0.urrpv.mongodb.net/Movies?retryWrites=true&w=majority";

class MongoConnector {
  
  getAllMovies() {
    return new Promise((resolve,reject)=>{
      MongoClient.connect(url, (err, db) => {
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