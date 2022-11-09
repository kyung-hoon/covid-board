const  express = require('express')
const bodyParser = require('body-parser')

const app= express();


app.use(bodyParser.json());

app.get('/',(req,res) =>{
    res.json({message: "hello covid-board"})
})

const port = process.env.port || 9000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}` )
})