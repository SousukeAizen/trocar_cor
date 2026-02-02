'use strict'

const botaotrocarCor = document.getElementById('trocar-cor')

function trocarCor (){
    const cor = document.getElementById('cor').value
    document.documentElement.style.setProperty('--cor-bg', cor)
}

botaotrocarCor.addEventListener('click', trocarCor )