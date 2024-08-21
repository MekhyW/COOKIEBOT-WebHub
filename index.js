const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('app/dist'));
const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`Webhub iniciado na porta: ${port}`);
})