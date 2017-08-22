const express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));
app.get('/', (req,res)=>{
    res.send('Welcome')
});

app.listen(port, ()=>console.log(`Server running on port ${port}`))


