var readline = require('readline');
var resp = "";

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var nomes = {
a : {
    nome : ["a"],
    idade : [36],
    estilo : ["teste"]
},
b : {
    nome : ["b"],
    idade : [19],
    estilo : ["teste2"]
},
c : {
    nome : ["c"],
    idade : [25],
    estilo : ["teste3"]
}}

leitor.question("Escolha entre a, b ou c :\n", function(answer) {
    answer == "a" ? console.log(nomes.a) : 
    answer == "b" ? console.log(nomes.b) :
    answer == "c" ? console.log(nomes.c) : console.log("Não existe...")
    leitor.close();
});
