console.log("Exercício 55\n");
for(let i = 1;i<=10;i++){
    console.log(i);
}

//---------------------------------------
console.log("Exercício 56\n");
for(let i = 10;i>=1;i--){
    console.log(i);
}


//---------------------------------------
console.log("Exercício 57\n");
for(let i = 0;i<=20;i+=2){
    console.log(i);
}


//---------------------------------------
console.log("Exercício 58\n");
for(let i = 1;i<=20;i+=2){
    console.log(i);
}

//---------------------------------------
console.log("Exercício 59\n");
for(let i = 0;i<=10;i++){
    console.log(5+i);
}
for(let i = 0;i<=10;i++){
    console.log(5-i);
}
for(let i = 0;i<=10;i++){
    console.log(5*i);
}
for(let i = 0;i<=10;i++){
    console.log(5/i);
}

//---------------------------------------
console.log("Exercício 60\n");
let soma = 0;
for(let i = 1;i<=100;i++){
    soma = soma += i;
}
console.log(soma,"\n");

//---------------------------------------
console.log("Exercício 61\n");

for(let i = 3;i<=30;i+=3){
    console.log(i);
}

//---------------------------------------
console.log("Exercício 62\n");
let numeroPares = 0;
for(let i = 2;i<=50;i+=2){
    console.log(i);
    numeroPares++; 
}
console.log(numeroPares,"\n");
//---------------------------------------
console.log("Exercício 63\n");
let produto =1;
for(let i = 1;i<=5;i++){
    produto *= i;
}
console.log(produto,"\n");
//---------------------------------------
console.log("Exercício 64\n");
console.log("Exercício 57\n");
for(let i = 0;i<=20;i+=2){
    console.log(i);
}
//---------------------------------------
console.log("Exercício 65\n");
for(let i = 1; i<=30 ; i++){
    console.log(i);
    if(i%2 === 0){
        console.log(" Par!");
    }
    else{
        console.log("Ímpar!");
    }
}


//---------------------------------------
console.log("Exercício 66\n");
soma = 0;
for(let i = 1; i<=100 ; i++){
    if(i%2 === 0){
        soma+=i;       
    }
}
console.log(soma);
//---------------------------------------
console.log("Exercício 67\n");
soma = 0;
for(let i = 1; i<=100 ; i++){
    if(i%2 != 0){
        soma+=i;       
    }
}
console.log(soma);

//---------------------------------------
console.log("Exercício 68\n");
soma = 0;
for(let i = 1; i<=50 ; i++){
    if(i%5 === 0){
        soma+=i;       
    }
}
console.log(soma);

//---------------------------------------
console.log("Exercício 69\n");
let maior = 0;
for(let i = 1; i<=10 ; i++){
    console.log(i);
    if(i>maior){
        maior=i; 
        console.log("O maior numero é:", maior);      
    }
}
//---------------------------------------
console.log("Exercício 70\n");

for(let tabuada = 0;tabuada <=10;tabuada++){
    for(let i = 0;i<=10;i++){
        console.log(tabuada,"x",i,"=",tabuada*i);
    }
}

//---------------------------------------
console.log("Exercício 71\n");
let contar =1;
while(contar<=10){
    console.log(contar);
    contar++
}

//---------------------------------------
console.log("Exercício 72\n");
contar =10;
while(contar>=1){
    console.log(contar);
    contar--
}
//---------------------------------------
console.log("Exercício 73\n");
soma=0;
i = 1;
while(i<=50){ 
    soma+=i
    i++
}
console.log(soma);

//---------------------------------------
console.log("Exercício 74\n");
let numerosÍmpares = 1;
while(numerosÍmpares<=20){
    console.log(numerosÍmpares);
    numerosÍmpares+=2
}

//---------------------------------------
console.log("Exercício 75\n");
let multiplosQuatro=4;
while(multiplosQuatro<=40){
    console.log(multiplosQuatro)
    multiplosQuatro += 4;
}

//---------------------------------------
console.log("Exercício 76\n");
let fatorialCinco = 1;
i=1;
while(i<=5){
    fatorialCinco*=i;
    console.log(fatorialCinco);
    i++
}

//---------------------------------------
console.log("Exercício 77\n");
let numeroDivisivel=1;
let conta =0;
while(numeroDivisivel<=100){
    if(numeroDivisivel%10===0){
        conta++
    }
    numeroDivisivel++;
}
console.log(conta);
//---------------------------------------
console.log("Exercício 78\n");
i = 5;
while(i>=0){
    console.log(i);
    i--;
}
console.log("Fim");

//---------------------------------------
console.log("Exercício 79 e 80\n");
let nomes = ["Rodney","Janete","Antônio","Arthur","Halanda"];
console.log(nomes[0]);
console.log(nomes[4]);
//---------------------------------------

console.log("Exercício 81\n");
let algarismos = [1,3,5,6];
console.log(algarismos.length);

//---------------------------------------
console.log("Exercício 82\n");
let feira =["maçã","bergamota","toranja"];
feira.push("Uva");
console.log(feira);

//---------------------------------------
console.log("Exercício 83 e 84\n");
let notaBimestre = [10,5,7,8,9.5];
console.log(notaBimestre);
console.log(notaBimestre[0]);
console.log(notaBimestre[4]);
//---------------------------------------
console.log("Exercício 85\n");
let tarefas=[];
tarefas.push("Limpar a casa");
tarefas.push("Ir à academia");
tarefas.push("Compras na Feira");
console.log(tarefas);
//---------------------------------------
console.log("Exercício 86\n");
let produtos = ["Notebook","Processador","Memoria","Chave Windows","Mouse"];
console.log("Temos", produtos.length ,"produtos cadastrados.")

//---------------------------------------
console.log("Exercício 87\n");
let numerosMostrar = [1,2,3,4,5,6,7,8,9];
for(let i=0;i<=8;i++){
    console.log(numerosMostrar[i]);
}

//---------------------------------------
console.log("Exercício 88\n");
let notasMedia=[5,5,5];
soma=0;
for(let i =0;i<=2;i++){
    soma+=notasMedia[i];
}
 console.log(soma/3);

//---------------------------------------
console.log("Exercício 89\n");
let precos=[50,90,56];
soma=0;
for(let i =0;i<=2;i++){
    soma+=precos[i];
}
 console.log(soma);
//---------------------------------------
console.log("Exercício 90\n");
let pares=[1,2,3,4,5,6,10,20];
let numeroPar =0;
for(let i=0;i<=7;i++){
    if(pares[i]%2===0){
        numeroPar++
    }
}
console.log(numeroPar);


//---------------------------------------
console.log("Exercício 91\n");
let impares=[1,2,3,4,5,6,10,20];
let numeroImpar =0;
for(let i=0;i<=7;i++){
    if(pares[i]%2!=0){
        numeroImpar++
    }
}
console.log(numeroImpar);
//---------------------------------------
console.log("Exercício 92\n");
nomes = ["Rodney","Janete","Antônio","Arthur","Halanda","Ana"]
for(let i=0;i<=5;i++){
    if(nomes[i].length>5){
        console.log(nomes[i]);
    }
}

//---------------------------------------
console.log("Exercício 93\n");
numero = [12,20,500,40,2];
let maiorNumero = 0;
for(let i = 0;i<=4;i++){
    if(numero[i]>maiorNumero){
        maiorNumero=numero[i];
    }
}
console.log(maiorNumero);
//---------------------------------------
console.log("Exercício 94\n");
numero = [12,20,500,40,2];
let menorNumero = 1000;
for(let i = 0;i<=4;i++){
    if(numero[i]<menorNumero){
        menorNumero=numero[i];
    }
}
console.log(menorNumero);

//---------------------------------------
console.log("Exercício 95\n");
notas = [12,80,50,60,72];
let notaMaior = 0;
for(let i = 0;i<=4;i++){
    if(notas[i]>=60){
        notaMaior++;
    }
}
console.log(notaMaior);

//---------------------------------------
console.log("Exercício 96\n");
produtos = ["Notebook","Processador","Memoria","Chave Windows","Mouse"];
let numeroProduto = 0;
for(let i = 0;i<=4;i++){
    if(produtos[i]==="Mouse"){
        numeroProduto++;
    }
}
console.log(numeroProduto);


//---------------------------------------
console.log("Exercício 97\n");
let aluno = {
    nome: "Arthur",
    idade: 22,
    curso: "ADS",
};
console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.curso);
//---------------------------------------
console.log("Exercício 98\n");
let produtoBom = {
    nome: "Arthur",
    preco: 20,
    quantidade: 5,
};
console.log("Valor do Produto em estoque:",produtoBom.preco*produtoBom.quantidade);

//---------------------------------------
console.log("Exercício 99\n");
let livro = {
    titulo:"Memorias Póstumas de Brás Cubas",
    autor:"Machado de Assis",
    paginas: 500,
    ano:1881,
};

console.log("O livro", livro.titulo,"do autor", livro.autor,"lançado no ano",livro.ano,"em algumas edições possui",livro.paginas,"páginas");

//---------------------------------------
console.log("Exercício 100\n");
let carro = {
    marca:"Wolksvagen",
    modelo:"Fusca",
    ano:"1980",
    ligado: false,
};
carro.ligado=true;
console.log(carro.ligado);
//---------------------------------------
console.log("Exercício 101\n");
let usuario ={
    nome:"Arthur",
    email:"usuario@abc.com",
    senha:"123456",
}

if(usuario.senha==="123456"){
    console.log("senha correta!");
}else{
    console.log("Senha incorreta");
}

//---------------------------------------
console.log("Exercício 102\n");

//---------------------------------------
console.log("Exercício 103\n");
let Arthur = {
    nome:"Arthur",
    nota:50,
};
let Jose = {
    nome:"Jose",
    nota:10,
};
let Heitor = {
    nome:"Heitor",
    nota:60,
};
let alunos =[Arthur,Jose,Heitor];

console.log(alunos);


//---------------------------------------
console.log("Exercício 104\n");
let alunosAprovados = 0;
for(let i=0;i<=2;i++){
    if(alunos[i].nota>=60){
        console.log("Aluno aprovado!")
        alunosAprovados++
    }
}
console.log(alunosAprovados);
//---------------------------------------
console.log("Exercício 105\n");


//---------------------------------------
console.log("Exercício 106\n");

//---------------------------------------
console.log("Exercício 107\n");

//---------------------------------------
console.log("Exercício 108\n");

//---------------------------------------
console.log("Exercício 109\n");

//---------------------------------------
console.log("Exercício 110\n");

//---------------------------------------
console.log("Exercício 111\n");

//---------------------------------------
console.log("Exercício 112\n");

//---------------------------------------
console.log("Exercício 113\n");

//---------------------------------------
console.log("Exercício 114\n");

//---------------------------------------
console.log("Exercício 115\n");

//---------------------------------------
console.log("Exercício 116\n");

//---------------------------------------
console.log("Exercício 117\n");

//---------------------------------------
console.log("Exercício 118\n");

//---------------------------------------
console.log("Exercício 119\n");

//---------------------------------------
console.log("Exercício 120\n");

//---------------------------------------
console.log("Exercício 121\n");

//---------------------------------------
console.log("Exercício 122\n");

//---------------------------------------
console.log("Exercício 123\n");

//---------------------------------------
console.log("Exercício 124\n");

//---------------------------------------
console.log("Exercício 125\n");

//---------------------------------------
console.log("Exercício 126\n");

//---------------------------------------
console.log("Exercício 127\n");

//---------------------------------------
console.log("Exercício 128\n");

//---------------------------------------
console.log("Exercício 129\n");