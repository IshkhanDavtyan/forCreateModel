const express = require('express');
const app = express();
const objectRouter = require('./routers/model')
require('./mongoose/mongoose')

app.use(express.json())
app.use(objectRouter)


app.listen(3000,()=>{
    console.log("Server run")
})