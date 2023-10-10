console.log('script sourced');
let symbol='';

function getEquationsFromServer(){
        
        axios.get('/equations').then((response) => {
    console.log('equations', response.data);
    let equationsList = response.data;
    let content = document.querySelector('#result');
    content.innerHTML = '';
    for (let equations of equationsList) {
        content.innerHTML += `
        <div>${equations.equation}<div>
        `;
    }
        }).catch((error) => {
        
            console.log(error);
            alert('somethin went wrong!');
        })
    }
getEquationsFromServer();


function sendEquationsToServer(event) {
    event.preventDefault();
    console.log('sendEquationsToServer');
    let firstNumber = document.querySelector('#number-input').value;
    let secondNumber = document.querySelector('#number-input2').value;
    console.log(`The number ${firstNumber} applied to ${secondNumber} equals `);
        axios.post('/equations', {
            firstNumber: document.querySelector('#number-input').value ,
            symbol: symbol,
            secondNumber: document.querySelector('#number-input2').value,           
          })
.then((response) => {
        console.log('POST successful');
        
       
    }).catch((error) => {
        console.log(error);
        alert('something went wrong');
    });


    document.querySelector('#number-input').value = '';
    document.querySelector('#number-input2').value = '';
   getEquationsFromServer();
    }

//sendEquationsToServer();
    function divideBy() 
{ 
        num1 = document.getElementById("number-input").value;
        num2 = document.getElementById("number-input2").value;
        symbol='/';
//document.getElementById("result").innerHTML = num1 / num2;
}

function multiplyBy() 
{ 
        num1 = document.getElementById("number-input").value;
        num2 = document.getElementById("number-input2").value;
        symbol='*';
//document.getElementById("result").innerHTML = num1 * num2;
}

function addedBy() 
{ 
        num1 = document.getElementById("number-input").value;
        num2 = document.getElementById("number-input2").value;
        symbol='+';
//document.getElementById("result").innerHTML = num1 + num2;
}

function subtractedBy() 
{ 
        num1 = document.getElementById("number-input").value;
        num2 = document.getElementById("number-input2").value;
        symbol='-';
//document.getElementById("result").innerHTML = num1 - num2;
}

function clearInput() {
    document.querySelector('#number-input').value = '';
    document.querySelector('#number-input2').value = '';
    
}