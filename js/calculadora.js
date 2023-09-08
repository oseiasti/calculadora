var numberOne = document.getElementById("inputNumberOne")
var numberTwo = document.getElementById("inputNumberTwo")


var result = document.getElementById("resultado")

var botao = document.getElementById("meubotao");
botao.addEventListener("click", function() {
  var n1 = numberOne.value;
  var n2 = numberTwo.value;

  var resultado = n1/n2; 
  result.innerHTML = resultado;
});