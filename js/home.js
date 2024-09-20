 document.getElementById('add-money-btn').addEventListener('click',function(){
    clickShowSectionById('add-money-from')

 })
 document.getElementById('out-money-btn').addEventListener('click',function(){
    clickShowSectionById('out-money-from')
 })
 document.getElementById('transfer-btn').addEventListener('click',function(){
    clickShowSectionById('transfer-money-from')
 })
 document.getElementById('bonus-btn').addEventListener('click',function(){
    clickShowSectionById('get-bonus-from')
 })
 document.getElementById('pay-btn').addEventListener('click',function(){
    clickShowSectionById('pay-bill-from')
 })

 document.getElementById('transenctions-btn').addEventListener('click',function(){
    clickShowSectionById('transaction-history')
 })
 
 document.getElementById('add-btn').addEventListener('click', function(event){
    event.preventDefault()
   
    const accountNum = getInputByValueId('account-number')
    const amountAdd = getInputByValueId('add-amount')
    const addPin =getInputByValueId('add-money-pin')
    const availableBalance= getTextFromId('available-amount')
    if(accountNum === 12345 && addPin === 4321){
        const newBalance =availableBalance +amountAdd 
        document.getElementById('available-amount').innerText= newBalance

        // transaction
      const p =  document.createElement("p")
      p.innerText=`added: ${amountAdd} , new balance: ${newBalance}`
      
    document.getElementById('transection-conteiner').appendChild(p)

        
    }else{
        alert( 'invalid input')
    }
})

document.getElementById('out-btn').addEventListener('click',function(event){
    event.preventDefault()
    const agentNum= getInputByValueId('agent-number')
    const outAmount= getInputByValueId('out-amount')
    const outPin = getInputByValueId('out-money-pin')
    const availableBalance= getTextFromId('available-amount')
    if( agentNum === 12345 && outPin===4321){
        const newBalance =availableBalance - outAmount ;
        document.getElementById('available-amount').innerText=newBalance

        const p = document.createElement("p")
        p.innerText =` cash out : ${outAmount}, new balance: ${newBalance}`
         document.getElementById('transection-conteiner').appendChild(p);
    }
    else{
        alert('invalid input')
    }
})


