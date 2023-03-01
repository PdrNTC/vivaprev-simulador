// variaveis dinamicamente armazenadas pelo DOM da aplicação 
const valor = document.getElementById('valor');
const nome = document.getElementById('nome');
const insereNome = document.getElementById('nome__cliente');
const insereSaldo = document.getElementById('saldo');
const insereSaldoPrazo = document.getElementById('saldoPrazo');
const resultado = document.getElementById('tabela');
const resultadoAuxiliar = document.getElementById('tabela');
const tituloPercentual = document.getElementById('container__percentual');
const resultadoPorAno = document.getElementById('tabela_prazo');
const resultadoPorAnoAuxiliar = document.getElementById('tabela_prazo');


// Arrays utilizados 
const valor_calulado = [];
const rendaPorAno = [];
const percentual = [0.0025, 0.0045, 0.0065, 0.0085, 0.0105, 0.0125, 0.0145, 0.0165, 0.0185, 0.02];
const percentualAuxiliar = [0.25, 0.45, 0.65, 0.85, 1.05, 1.25, 1.45, 1.65, 1.85, 2,00];
const indiceAuxiliar = [1, 5, 10, 15, 20, 25, 30, 35];



function calcular () {
    // Convertendo Valor da mascara para INT
    //const valorConvertido = valor.value.replace(/\D/g,'');
    const valorConvertido = parseFloat(valor.value.replace(/[^0-9,]*/g, '').replace(',', '.')).toFixed(2);
    console.log(parseFloat(valorConvertido));
   
    
    // Limpando a tela quando chamar a função
    resultado.innerHTML = ``;
    resultadoPorAno.innerHTML = ``;


    // Criando a const formatter para ser chamada com o metodo format para formatar em valor monetario
    const formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
    });

    // Calculando a renda inicial estimada
    for(let i = 0; i < percentual.length; i = i + 1) {
        valor_calulado[i] = valorConvertido * percentual[i];
    }
    //console.log(valor_calulado);

    // Calculando a renda por ano
    for(let j = 0; j < 8; j = j + 1) {
        rendaPorAno[j] = valorConvertido/(12*indiceAuxiliar[j]);
    }
    //console.log(rendaPorAno);


    // Inserindo o Nome do Participante dinamicamente na label
    insereNome.innerHTML = `
        <strong class="negrito">${nome.value}</strong>  
    `

    // Inserindo o Valor do participante dinamicamente na label
    insereSaldo.innerHTML = `
        ${formatter.format(valorConvertido)}
    `

    insereSaldoPrazo.innerHTML = `
        ${formatter.format(valorConvertido)}
    `

    resultadoAuxiliar.innerHTML = `
        <tr>
            <th>Percentual do saldo (a definir)</th>
            <th>Renda inicial estimada</th>
        </tr>
    `   

    // Exibindo na tela dinamicamente o resultado com a function forEach
    valor_calulado.forEach(function(valor_calulado, i){
        
        //console.log('[ForEach]', valor_calulado, i);
        resultado.innerHTML += `
            <tr>
                <td>${percentualAuxiliar[i]}%</td>
                <td>${formatter.format(valor_calulado)}</td>
            </tr>
        `   
    })


    // Exibindo na tela dinamicamente o resultado com a function forEach
    rendaPorAno.forEach(function(rendaPorAno, i) {

        if (indiceAuxiliar[i] === 1) {
            resultadoPorAno.innerHTML = `
                <tr>
                    <th>Prazo (a definir)</th>
                    <th>Renda inicial estimada</th>
                </tr>
                <tr>
                    <td>${indiceAuxiliar[0]} ano</td>
                    <td>${formatter.format(rendaPorAno)}</td>
                </tr>
            `
            console.log(rendaPorAno)
        } else {
            resultadoPorAno.innerHTML += `
            <tr>
                <td>${indiceAuxiliar[i]} anos</td>
                <td>${formatter.format(rendaPorAno)}</td>
            </tr>
            `
        }
      
    })

}