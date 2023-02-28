const valor = document.querySelector('#valor');
const nome = document.getElementById('nome');
const insereNome = document.getElementById('nome__cliente');
const resultado = document.getElementById('tabela');
const resultadoAuxiliar = document.getElementById('tabela');
const tituloPercentual = document.getElementById('container__percentual');
const resultadoPorAno = document.getElementById('tabela_prazo');
const resultadoPorAnoAuxiliar = document.getElementById('tabela_prazo');

const valor_calulado = [];
const rendaPorAno = [];
const percentual = [0.0025, 0.0045, 0.0065, 0.0085, 0.0105, 0.0125, 0.0145, 0.0165, 0.0185, 0.02];
const percentualAuxiliar = [0.25, 0.45, 0.65, 0.85, 1.05, 1.25, 1.45, 1.65, 1.85, 2,00];
const indiceAuxiliar = [1, 5, 10, 15, 20, 25, 30, 35];



function calcular () {
    console.log(nome.value);
    // Limpando a tela quando chamar a função
    resultado.innerHTML = ``;
    resultadoPorAno.innerHTML = ``;

    const formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
    });

    // Calculando a renda inicial estimada
    for(let i = 0; i < percentual.length; i = i + 1) {
        valor_calulado[i] = (valor.value * percentual[i]);
    }
    console.log(valor_calulado);

    // Calculando a renda por ano
    for(let j = 0; j < 8; j = j + 1) {
        rendaPorAno[j] = valor.value/(13*indiceAuxiliar[j]);
    }
    console.log(rendaPorAno);

    insereNome.innerHTML = `
        ${nome.value};
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

    resultadoPorAnoAuxiliar.innerHTML = `
        <tr>
            <th>Percentual do saldo (a definir)</th>
            <th>Renda inicial estimada</th>
        </tr>
    `

    // Exibindo na tela dinamicamente o resultado com a function forEach
    rendaPorAno.forEach(function(rendaPorAno, i) {
        resultadoPorAno.innerHTML += `
        <tr>
            <td>${indiceAuxiliar[i]} anos</td>
            <td>${formatter.format(rendaPorAno)}</td>
        </tr>
        `
    })

}