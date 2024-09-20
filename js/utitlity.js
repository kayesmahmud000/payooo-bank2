function getInputByValueId(id){
  return parseFloat(document.getElementById(id).value);
}

function getTextFromId(id){
    return parseFloat(document.getElementById(id).innerText);
}

function clickShowSectionById(id){
    document.getElementById('add-money-from').classList.add('hidden')
    document.getElementById('out-money-from').classList.add('hidden')
    document.getElementById('transfer-money-from').classList.add('hidden')
    document.getElementById('get-bonus-from').classList.add('hidden')
    document.getElementById('pay-bill-from').classList.add('hidden')
    document.getElementById('transaction-history').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')

}