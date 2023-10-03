console.log('script sourced');

function sendEquationsToServer(event) {
    event.preventDefault();
    console.log('sendEquationsToServer');
    let firstNumber = document.querySelector('#number-input').value;
    let secondNumber = document.querySelector('#number-input2').value;
    console.log(`The number ${firstNumber} applied to ${secondNumber} equals `);
    document.querySelector('#number-input').value = '';
    document.querySelector('#number-input2').value = '';
        axios.post('/songs',
    
     
    ).then((response) => {
        console.log('POST successful');
        
        getSongs()
    }).catch((error) => {
        console.log(error);
        alert('something went wrong');
    });
    }