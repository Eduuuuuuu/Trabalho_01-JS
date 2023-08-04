'use strict'

function trocarNome() {
    const nome = document.getElementById('nome')
    const nomeDigitado = prompt('Insira seu nome')
    if (nomeDigitado == ''){
        nome.textContent = 'NÃO IDENTIFICADO'
    }else{
        nome.textContent = nomeDigitado
        
    }
}

const botaoTrocarNome = document.getElementById('trocar-nome')
botaoTrocarNome.addEventListener('click', trocarNome)

