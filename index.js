const express = require('express');

const app = express();
const port = 5000;
WpK3TYgZfdkd5Rpx
TODOdb
app.get('/',(req,res)=>{
    res.send("hello world");
});

app.post('/task',(req,res)=>{
    console.log("hitting ta post");
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)})