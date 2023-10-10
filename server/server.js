const express = require('express');


const app = express();
const PORT=5011;

const equationsList = [
    { equation: '10 - 7 = 3'
    },
    {
        equation: '6 + 9 = 15'
    },
    {
        equation: '8 / 2 = 4'
    }

];



app.use(express.json());

app.use(express.static('server/public'));

app.get('/equations', (req, res) => {
    //   
//console.log(req); //what is the request? lot of data
console.log('request made for /equations');
res.send(equationsList);
});

app.post('/equations', (req, res) => {
    console.log(req.body);
    console.log('@ POST/equation')
    //let newEquation = req.body;
    let equationOut = 0;

    if(req.body.symbol === '+'){
        let solution = Number(req.body.firstNumber) + Number(req.body.secondNumber);
        equationOut = solution;
        console.log(equationOut)
//equation.solution = solution;
    }else if (req.body.symbol === '-' ){
        let solution = Number (req.body.firstNumber) - Number (req.body.secondNumber);
        equationOut = solution;
        console. log (equationOut);
       // equation.solution = solution;
        }else if (req.body.symbol === '*'){
            let solution = Number (req.body.firstNumber) * Number (req.body.secondNumber);
            equationOut = solution;
            console. log (equationOut);
            //equation.solution = solution;
        }else if(req.body.symbol === '/') {
            let solution = Number (req.body.firstNumber) / Number (req.body.secondNumber);
            equationOut = solution;
        console. log (equationOut) ;
        //equation.solution = solution;
        }

        let solutionString = req.body.firstNumber+' ' + req.body.symbol+' ' + req.body.secondNumber+' ' + '=' +' '+ equationOut
       
       
    equationsList.push({
        equation:solutionString 
    });
    console.log('the new array is', equationsList);
    res.sendStatus(201)
});


app.listen(PORT, () => {
    console.log('listening on port', PORT)
});