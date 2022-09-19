// chave.valor

var ana = { nome: "Ana", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 } //referenciar objeto. Propriedades e tipos diferentes
var paulo = { nome: "Paulo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }
var rafaela = { nome: "Rafaela", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }

//acessar 1 item do objeto

//console.log(ana.vitorias) //vai acessar as vitorias de ana

//Calcular pontos de um jogador. O escopo da função foi declarado na function. Agora basta nos () informar o nome do jogador
//calculaPontos(ana);

//Lista (array) de jogadores que recebe os objetos

var jogadores = [ana, paulo, rafaela];

//Calcular os pontos

function calculaPontos(jogador) {
    //jogador.vitoria * 3 = poderia ser qualquer valor. Aqui usou a vitória valendo 3 pontos

    var pontos = (jogador.vitorias * 3) + jogador.empates

    return pontos;

}

ana.pontos = calculaPontos(ana); //a variável ana recebe o calculo da função




//console.log(jogadores);

//exibir os jogadores na tela

function exibeJogadoresNaTela(jogadores) {
    var elemento = "";

    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
        elemento += "</tr>"

    }

    var tabelaJogadores = document.getElementById("tabelaJogadores").innerHTML = elemento;

}



//Botões

function adicionarVitoria(i) {
    var jogador = jogadores[i] //vai pegar a lista de jogadores e descobrir o indice
    jogador.vitorias++ //ao clicar no botão vai incrementar
        jogador.pontos = calculaPontos(jogador) //para atualizar os pontos
    exibeJogadoresNaTela(jogadores) //chamando a função exibir para jogar para tela

}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++
        jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)

}



//Invocando a função para que ela apareça na tela

exibeJogadoresNaTela(jogadores);