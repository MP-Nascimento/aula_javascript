//Manipulando elementos da pagina
function botao(){
  document.getElementById("agradecimento").innerHTML = "Obrigdo por clicar";

}
function redirecionar(){
  window.open("https://digitalinnovation.one/")
  //window.location.href = "https://digitalinnovation.one/"

}
function trocar(element){
  //document.getElementById("moousemove").innerHTML = "Obrigado Por passar o mouse";
  element.innerHTML = "Obrigado Por passar o mouse";
  //alert("Trocar texto")

}
function voltar(element){
  //document.getElementById("moousemove").innerHTML = "Passe o mouse aqui";
  element.innerHTML = "Passe o mouse aqui";
}
function load(){
  alert("pagina carregada")
}
function funcaoChange(element){
  console.log(element.value)
}

/*function botao(){
  alert("Obrigado por Clicar")
}*/


//Function e variaveis Globais
/*
var validar = 0
function validaIdade(idade){
   validar 
  if (idade >= 18){
    validar = true
  }
  else{
    validar = false
  }
  return validar
}
var idade = prompt("Qual a sua idade")
console.log(validaIdade(idade))

function soma(n1,n2){
  return n1 + n2 
}

/*var numero1 = prompt("Qual o primeiro numero")
var numero2 = prompt("Qual o segundo numero")
console.log(soma(numero1,numero2))*/


// Condicionais, laços de repetição e Date
/*var d = new Date();
console.log(d.getMonth()+1)
console.log(d.getHours())
console.log(d.getMinutes())*/


/*
var count
for(count = 0; count<= 5; count++){
  console.log(count)
}
*/


/*var count= 0
while(count<=5){
  console.log(count)
  count++
}*/





/*var idade = prompt("Qual a sua idade")
if (idade >=18){
  alert("maior de idade")
}else{
  alert("menor de idade")
}*/






//Array e Dicionario

/*var frutas = [{nome : "Maçã", cor:"Vermelha"}, {nome:"Uva",cor:"roxa"}]
console.log(frutas)
alert(frutas)*/

/*var fruta = {nome : "Maçã", cor:"Vermelha"}
console.log(fruta.nome)
alert(fruta.cor)*/


/*var lista = ["Maçã","Pera", "Laranja"]
lista.push("Uva")
lista.pop

console.log(lista)
console.log(lista.toString())
console.log(lista.join( " - "))*/

//Introdução ao JavaScript

/*var nome = "Miguel Pereira"
var n1 = 5
var n2 = 3
var frase = "Jpão é o melhor time do mundo"
alert(nome + " tem " + idade + "anos")
console.log(nome)
console.log(n1 * n2)
console.log(frase.toLocaleLowerCase())
console.log(frase.toUpperCase())
console.log(nome + "tem"+ idade)
alert(frase.replace("Japão", "Brasil"))*/