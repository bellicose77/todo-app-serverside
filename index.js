const express = require('express');
const { MongoClient} = require('mongodb');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 5000;

const uri = "mongodb+srv://TODOdb:WpK3TYgZfdkd5Rpx@cluster0.vtwog.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
  async function run()
  {
      try{
        await client.connect(); 
        const database = client.db("todoDB");
        const todo = database.collection("todo");
        console.log("hitted db")
        app.post('/task',(req,res)=>{
            console.log("hitting ta post");
        })
      }
      finally {
        await client.close();
      }

  }
  run().catch(console.dir);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)})