// function gatInputByValueId(id){
//     return document.getElementById(id).value;

// }

document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();

    const phnNumber= getInputByValueId('number-input')
    const pinNumber=getInputByValueId('pin-number')
    if(phnNumber === '01234' && pinNumber=== 1234){
        window.location.href ='./home.html'
    }else{
        alert('Invalid Input')
    }
}
   
)

