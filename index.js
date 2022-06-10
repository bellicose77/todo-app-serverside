const express = require('express');
const { MongoClient,ServerApiVersion } = require('mongodb');
const app = express();
const cors = require('cors');

const ObjectId = require('mongodb').ObjectId;


app.use(cors());
app.use(express.json());
const port = 5000;

const uri = "mongodb+srv://TODOdb:WpK3TYgZfdkd5Rpx@cluster0.vtwog.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true,serverApi: ServerApiVersion.v1 });
  async function run()
  {
      try{
        await client.connect(); 
        const database = client.db("todoDB");
        const todo = database.collection("todo");
        // console.log("hitted db")
        app.get('/tasks',async(req,res)=>{
          const result = todo.find({})
          const cursor = await result.toArray()
          // res.send("hello world");
          res.json(cursor);
        })
        app.get('/task/:id',async(req,res)=>{
          const id = req.params.id;
          const query = {_id:ObjectId(id)};
          const result = await todo.findOne(query);
          res.json(result);

        })
        app.post('/task',async (req,res)=>{
            const dataInput = req.body;
            const result = await todo.insertOne(dataInput);
            console.log("hitting ta post",result);
            res.json(result);
        });

        app.put('/update/:id',async(req,res)=>{
          const id = req.params.id;
          const updatevalue = req.body;
          const query = {_id:ObjectId(id)}
          const options = {upsert:true};
          const updatedoc = {
            $set:{
              name:updatevalue.name,
              email:updatevalue.email,
              password:updatevalue.password
              
            },
          };
          const result = await todo.updateOne(query,updatedoc,options)
          res.json(result);
        });

        app.delete('/task/:id',async(req,res)=>{
         const id = req.params.id;
         const query = {_id:ObjectId(id)}
         const result = await todo.deleteOne(query);
         //console.log(id);
         res.json(result);
        })
      }
      finally {
        
      }

  }
  run().catch(console.dir);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)})