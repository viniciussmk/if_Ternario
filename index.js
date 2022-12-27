var readline = require('readline');
var resp = "";

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var nomes = {
a : {
    nome : ["mag"],
    idade : [36],
    estilo : ["pessimo"]
},
b : {
    nome : ["vini"],
    idade : [19],
    estilo : ["maconheiro"]
},
c : {
    nome : ["roro"],
    idade : [25],
    estilo : ["noia"]
}}

leitor.question("Escolha entre a, b ou c :\n", function(answer) {
    answer == "a" ? console.log(nomes.a) : 
    answer == "b" ? console.log(nomes.b) :
    answer == "c" ? console.log(nomes.c) : console.log("Não existe...")
    leitor.close();
});