'use strict'

const botaotrocarCor = document.getElementById('trocar-cor')

function trocarCor (){
    
    let cor = document.getElementById('cor').value
    
    if (cor == 'vermelho') {
        cor = '#FF0000'
    } else if (cor == 'azul') {
        cor = '#0000FF'
    } else if (cor == 'verde') {
        cor = '#00AA00'
    } else if (cor == 'amarelo') {
        cor = '#FFFF00'
    }
        document.documentElement.style.setProperty('--cor-bg', cor)
    
}

botaotrocarCor.addEventListener('click', trocarCor )
