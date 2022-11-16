const express = require('express')
require('dotenv').config();

const app = express()

app.get('/',(req,res)=>{
    res.send('hallo dunia');
});

const PORT = process.env.PORT || 5000;


app.listen(PORT,console.log(`server running in ${process.env.NODE_ENV} mode port ${PORT}`));
