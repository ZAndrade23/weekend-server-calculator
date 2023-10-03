const express = require('express');


const app = express();
const PORT=5011;

const arrayEquations = [

];
app.use(express.json());

app.use(express.static('server/public'));

app.post('/equations', (req, res) => {
    console.log(req.body);
    let newEquation =req.body;
    //
    arrayEquations.push(newEquation);
    console.log('the new array is', arrayEquations);
    res.sendStatus(201)
});


app.listen(PORT, () => {
    console.log('listening on port', PORT)
});