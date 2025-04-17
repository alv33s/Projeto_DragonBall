botao = document.querySelectorAll('.botao');

botao.forEach(botao => {
    botao.addEventListener("click", () => alterarBotao(botao));
});

function alterarBotao(botao){
    console.log('Função ativada');
    if (botao.classList.contains('selecionado') == false) { 
        botaoSelecionado = document.querySelector('.botao.selecionado');
        botao.classList.add('selecionado');
        botaoSelecionado.classList.remove('selecionado');
        alterarConteudo(botao);
    }
    
};

function alterarConteudo(botao){
    if(botao.classList.contains('cyberstorm')){
        const divNova = document.getElementById('cyberstorm');
        const divAntiga = document.querySelector('div.personagem.selecionado');
        divAntiga.classList.remove('selecionado');
        divNova.classList.add('selecionado');

    }else if(botao.classList.contains('codepixie')){
        const divNova = document.getElementById('codepixie');
        const divAntiga = document.querySelector('div.personagem.selecionado');
        divAntiga.classList.remove('selecionado');
        divNova.classList.add('selecionado');

    }else if(botao.classList.contains('hexblade')){
        const divNova = document.getElementById('hexblade');
        const divAntiga = document.querySelector('div.personagem.selecionado');
        divAntiga.classList.remove('selecionado');
        divNova.classList.add('selecionado');

    } else if(botao.classList.contains('neonpulse')){
        const divNova = document.getElementById('neonpulse');
        const divAntiga = document.querySelector('div.personagem.selecionado');
        divAntiga.classList.remove('selecionado');
        divNova.classList.add('selecionado');

    } else if(botao.classList.contains('codebraker')){
        const divNova = document.getElementById('codebraker');
        const divAntiga = document.querySelector('div.personagem.selecionado');
        divAntiga.classList.remove('selecionado');
        divNova.classList.add('selecionado');

    }
};

