const express = require('express');
const app= express();

app.listen(5001,()=>console.log('my app is running on the port 5002'));

app.get('/',(req,res)=>{
    res.send('this my page')

})

