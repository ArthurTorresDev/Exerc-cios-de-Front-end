//-------------------------------------------
console.log("Olá Mundo");
const cidade = "Muriaé";
let idade = 22;
let nome  = "Arthur M.Torres";
let curso = "Análise e Desenvolvimento de Sistemas";
let periodo = "1º Período";
console.log(nome);
console.log(curso,"-",periodo);
let mensagem ="Estou aprendendo JavaScript";
//-------------------------------------------

console.log("\nExercício 06\n");
let produto = "Mouse";
let preco = 59.90;
let quantidade = 2;
console.log(produto,"\n"+ preco,"\n"+quantidade,"\n");

//-------------------------------------------

console.log("Exercício 07\n");
console.log("Produto:",produto+"\n"+"Preço:",preco+"\n"+"Quantidade:",quantidade);

//-------------------------------------------

console.log("Exercício 08\n");
let saldo = 100;
saldo = 150
console.log(saldo);

//-------------------------------------------

console.log("Exercício 09\n");
const PI = 3.14;
let raio = 5;
console.log("PI:",PI+"\n"+"raio:",raio,"\n");

//-------------------------------------------

console.log("Exercício 10\n");
let matricula = "00000001";
let nota = 9.0;
console.log("Nome:",nome);
console.log("Curso:",curso);
console.log("Matrícula:",matricula);
console.log("Nota:",nota,"\n");

//-----------------------------------------

console.log("Execício 11\n");
let a = 3;
let b =3;
console.log(a+b,"\n");

//----------------------------------------

console.log("Execício 12\n");
console.log(a-b,"\n");

//---------------------------------------

console.log("Execícios 13\n");
console.log(a*b,"\n");

//---------------------------------------

console.log("Exercício 14\n");
console.log(a/b,"\n");

//---------------------------------------

console.log("Exercício 15\n");
let numero = 10;
console.log(2*numero,"\n");

//---------------------------------------

console.log("Exercício 16");
numero = 21
console.log(3*numero,"\n");

//---------------------------------------

console.log("Exercício 17");
preco = 100;
let desconto = 20;
console.log(preco-desconto,"\n");

//---------------------------------------
console.log("Exercício 18\n");
let nota1 = 7;
let nota2 = 8;
let nota3 = 9;
let calculo = ((nota1+nota2+ nota3)/3);
console.log("media das noatas:",calculo,"\n");
//---------------------------------------
console.log("Exercício 19\n");
let minutos = 120;
let conversorHoras = (minutos/60);
console.log(conversorHoras,"\n");
//---------------------------------------
console.log("Exercício 20\n");
let dias = 7;
let resultado = (7 * 24);
console.log("7 dias são equivalentes a",resultado,"horas\n");
//---------------------------------------
console.log("Exercício 21\n");
if(idade >= 18){
    console.log("Maior de idade");
} else{
    console.log("Menor de Idade")
}
//---------------------------------------
console.log("Exercício 22\n");
nota = 50;
if(nota>=60){
    console.log("Nota é maior ou igual a 60")
}else{
    console.log("Nota menor que 60");
}

//---------------------------------------
console.log("Exercício 23\n");
let senha = 1234;
if(senha == 12345){
    console.log("Senha é igual a", senha)
}else{
    console.log("Senha é diferente do esperado\n");
}
//---------------------------------------
console.log("Exercício 24\n");
if(a>b){
    console.log("a é maior que b");
}else if(a == b){
    console.log("a é igual a b");
}else{
    console.log("a é menor que b");
}
//---------------------------------------
console.log("Exercício 25\n");
let temperatura = -10;
if(temperatura<0){
    console.log("A Temperatura está abaixo de 0");
}else{
    console.log("Temperatura igual ou acima de zero");
}
//---------------------------------------
console.log("Exercício 26\n");
let usuarioLogado = true;
console.log(!usuarioLogado);
//---------------------------------------
console.log("Exercício 27 e 39\n");
idade = 20;
let temCarteira = true;
let podeDirigir = false;
if(idade >= 18 && temCarteira === true){
    podeDirigir = true;
}else{
    podeDirigir = false;
}
console.log("A pessoa pode dirigir?",podeDirigir,"\n");
//---------------------------------------
console.log("Exercício 28\n");
nota = 75;
let frequencia =80;
let aprovado = false;
if(nota>60 && frequencia>=75){
    aprovado = true;
}else{
    aprovado = false;
}
console.log("O aluno foi aprovado?",aprovado,"\n");
//---------------------------------------
console.log("Exercício 29\n");
let temIngresso = true;
let nomeNaLista = false;
if(temIngresso === true || nomeNaLista === true){
    console.log("Pode entrar!");
}else{
    console.log("Não pode entrar");
}
//---------------------------------------
console.log("Exercício 30\n");
let valorCompra = 250;
let valorDesconto = false;
if(valorCompra >100 && valorCompra <500){
    valorDesconto = true;
console.log("valor esta entre 100 e 500?",valorDesconto,"\n");
}
//---------------------------------------
console.log("Exercício 31\n");

idade = Number(prompt("Digite sua idade: "));
if(idade >= 18){
    console.log("Maior de idade!")
}else{
    console.log("Menor de idade\n");
}
//---------------------------------------
console.log("Exercício 32 e 33 e 34\n");
numero = Number(prompt("Digite um número: "));
if(numero > 0){
    console.log("Número é Positivo!");
}else if(numero === 0){
    console.log("Número é igual a zero!");
}else{
    console.log("Número é negativo\n")
}
//---------------------------------------
console.log("Exercício 36\n");
senha = Number(prompt("Digite sua senha: "));
let senhaCorreta = "admin123";
if(senha === senhaCorreta){
    console.log("Acesso aceito!")
}else{
    console.log("Acesso negado\n!");
}
//---------------------------------------
console.log("Exercício 37 e 38\n");
numero = Number(prompt("Digite um número: "));
if(numero%2 === 0){
    console.log("Número é Par!");
}else{
    console.log("Número é Ímpar!\n");
}
//---------------------------------------
console.log("Exercício 40\n");
let compra = Number(prompt("Digite o valor da compra: "));
let valorFreteGratis = 200;
if(compra >= valorFreteGratis){
    console.log("Parabéns você possui frete grátis!");
}else{
    console.log("Compra não elegível para frete grátis.\n")
}
//---------------------------------------
console.log("Exercício 41\n");
let idadeParaClassificar = 10;
if(idadeParaClassificar <12){
    console.log("criança\n");
}else if(idadeParaClassificar<=17){
     console.log("adolescente\n");
}else if(idadeParaClassificar<60){
     console.log("Adulto\n");
}else{
    console.log("Idoso\n");
}
//---------------------------------------
console.log("Exercício 42\n");
nota = 60;
if(nota <60){
    console.log("Reprovado\n");
}else if(nota<=79){
     console.log("Aprovado\n");
}else{
    console.log("Aprovado com destaque\n");
}
//---------------------------------------
console.log("Exercício 43\n");
temperatura = 3;
if(temperatura<15){
    console.log("Frio\n");
}else if(temperatura<=25){
     console.log("Agradavel\n");
}else{
    console.log("Quente\n");
}

//---------------------------------------
console.log("Exercício 44\n");
valorCompra = 600;
if(valorCompra<100){
    console.log("sem desconto\n");
}else if(valorCompra<=499){
     console.log("10% de desconto\n");
}else{
    console.log("20% de desconto\n");
}

//---------------------------------------
console.log("Exercício 45\n");
let classificarNumero = -15;
if(classificarNumero<0){
    console.log("Número Negativo\n");
}else if(classificarNumero===0){
     console.log("Número Zero\n");
}else{
    console.log("Número Positivo\n");
}

//---------------------------------------
console.log("Exercício 46\n");
//A variável calculo que calcula a media
//das variáveis nota1 nota2 e nota3 foi reutilizada
//do exercício 18;
if(calculo<60){
    console.log("reprovado\n");
}else if(calculo<=69){
     console.log("recuperação \n");
}else{
    console.log("aprovado\n");
}

//---------------------------------------
console.log("Exercício 47\n");
let salario = Number(Prompt("Digite seu salário: "));
if(salario<=1500){
    console.log("Baixo\n");
}else if(calculo<=4000){
     console.log("Médio \n");
}else{
    console.log("Alto\n");
}

//---------------------------------------
console.log("Exercício 48\n");
let estoque = Number(Prompt("Digite o número de produtos no estoque: "));
if(estoque <= 0){
    console.log("Esgotado\n");
}else if(estoque <10){
    console.log("Estoque médio\n");
}else if(estoque <=50){
    console.log("Estoque medio\n");
}else{
    console.log("Estoque alto\n");
}
//---------------------------------------
