//eventos com mouse
/* function bot(){
    alert('voce clicou')
}

function pass(){
    let p1 = document.getElementById('aqui')
    p1.innerHTML = 'Você passou o mouse'
}

function out(){
    let p2 = document.getElementById('aqui')
    p2.innerHTML = 'O mouse saiu'
} */

//cadastro de nome
 function cadastro(event){
    let nome = document.querySelector('#nome').value
    if(nome === ''){
        alert('Informe seu nome')
        event.preventDefault()
    } else {
        alert(`Seu nome é ${nome}`)
        event.preventDefault()
    }

 }
