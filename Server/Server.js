const express = require('express');
const path = require('path');
const routes = require('./routes/routes')
const port = process.env.PORT 
const mongoose = require('mongoose')

const cors = require('cors');
const app = express();
app.use(express.json());

app.use('/local',routes)

mongoose.connect(process.env.con)
.then(()=>{
    console.log("connected")
})
.catch((error)=>{
console.log(error)
}
)
app.listen(port,()=>{
    console.log("redman")
})