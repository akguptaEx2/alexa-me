const port = process.env.PORT || 5555;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {log} = console;
const ResponseBuilder = require('./response-builder');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Working");
});
app.post('/webhook',async (req,res)=>{
   let dummy = new ResponseBuilder().speak().buildResponse();
    res.json(dummy);
});
app.listen(port,(err)=>{
    if(err){
        return log(err);
    }
    log(`started on port ${port}`);
});