const express = require('express');
const app = express();
require('dotenv').config();


const port = process.env.PORT || 3000;


app.get('/', (req, res)=>{
   res.send("Hello Word!!");
});


app.listen(port, () => {
    console.log(`This app listening on port ${port}`)
});