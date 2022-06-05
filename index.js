const express = require('express');
const { MongoClient} = require('mongodb');

const app = express();
const port = 5000;

const uri = "mongodb+srv://TODOdb:WpK3TYgZfdkd5Rpx@cluster0.vtwog.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
client.connect(err => {
    const collection = client.db("Task").collection("TaskInfo");
    // perform actions on the collection object
    console.log("hitteed data base");
    client.close();
  });
  async function run()
  {
      
  }

app.get('/',(req,res)=>{
    res.send("hello world");
});

app.post('/task',(req,res)=>{
    console.log("hitting ta post");
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)})