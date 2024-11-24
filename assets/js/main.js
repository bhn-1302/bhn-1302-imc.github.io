//capturar evento de submit de formulário
const form = document.querySelector('#formulario');

// Parar o envio do formulário. Primeiro, precisa-se usar um evento!
// primeiro coloca-se o evento desejado, depois uma função;
// colocar o parâmetro do evento na função. E = event / evento
form.addEventListener('submit', function (e) {
    e.preventDefault(); //parar o evento. No caso, de SUBMIT
    const inputPeso = e.target.querySelector('#peso'); // e.target pega o elemento específico que está recebendo um determinado evento. Aqui, é o evento no FORM
    const inputAltura = e.target.querySelector('#altura'); 
    
    const peso = Number(inputPeso.value); // pegar o valor mesmo de PESO
    const altura = Number(inputAltura.value);

    if (!peso) { //se o peso for inválido, aparece essa msg
        setResult('Peso Inválido!', false);
        return; // a função vai parar aqui se o peso for inválido
    } 

    if (!altura) { //se a altura for inválido, aparece essa msg
        setResult('Altura Inválida!', false);
        return; // a função vai parar aqui se o peso for inválido
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    
    const msg = `Seu IMC é ${imc} (${nivelImc}).`; //apresentar a mensagem na tela para o usuário.

    setResult(msg, true);

});

function getNivelImc (imc) { // função para saber qual é a situação do seu IMC
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    // não é nesserário ELSE IF pois o RETURN já PARA a função caso a condição seja verdadeira. Caso contrário, ela continua anlisando.

    // Como o IF é muito pequeno e simples, não é necessário fazer o bloco, pode-se escrever tudo numa linha só.
    if (imc >= 39.9)  return nivel[5]; //retorna o indíce   
    if (imc >= 34.9)  return nivel[4];  
    if (imc >= 29.9 ) return nivel[3];
    if (imc >= 24.9)  return nivel[2];
    if (imc >= 18.5)  return nivel[1];
    if (imc < 18.5)   return nivel[0];

}

function getImc (peso, altura) { // função para calcular o IMC
    const imc = peso / altura ** 2; // altura elevado a 2
    return imc.toFixed(2); // retorna o resultado com 2 casas decimais
}

function criaP (){ // essa função vai criar o parágrafo P

     // criar um elemento PARÁGRAFO
     const p = document.createElement('p');
     return p;
}

function setResult (msg, isValid) { // parâmetro mensagem
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; // limpar o HTML da div "resultado"
    
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');// se for válido / verdadeiro adicionar essa classe com essa cor de fundo ao P;
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg; // add a mensagem dentro do P
    resultado.appendChild(p); //add o PARAGRAFO na DIV RESULTADO
    
}

