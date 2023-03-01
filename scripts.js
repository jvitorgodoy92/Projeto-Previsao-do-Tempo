// VARIAVEIS - ESPAÇO DA MEMORIA QUE GUARDAMOS ALGO. EX: NUMERO, TEXTO, IMAGEM....
// FUNÇÃO - TRECHO DE CÓDIGO QUE SÓ É EXECUTADO QUANDO É CHAMADO.
 //       function mario(){           // AQUI ESTOU CRIANDO A FUNÇÃO
           
  //      }
  //      mario() // AQUI ESTOU CHAMANDO A FUNÇÃO

//    var chave = "6f7a4b8a0032f2f200d6e88c2b795d72"
//    async  function buscarCidade(cidade){
//    var dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + 
//    "&appid=" + chave + "&lang=pt-br" + "&units=metric")
//    .then(resposta => resposta.json())

//    console.log(dados)

// }

let chave = "1e6bf3d95211c2ae07610d829b60b2d8"

function colocarNaTela(dados) {
  
  console.log(dados)

  document.querySelector(".cidade").innerHTML = "Tempo em: " + dados.name 
  // .innerHTML = toda vez que quero colocar algo dentro do HTML

  document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + " ºC"

  document.querySelector(".descricao").innerHTML = dados.weather[0].description

  document.querySelector(".umidade").innerHTML = "Umidade relativa do ar: " + dados.main.humidity + "%"

  document.querySelector(".icone-nuvem").src= "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"




}

async function buscarCidade(cidade) {
    let dados = await fetch 
    (
      "https://api.openweathermap.org/data/2.5/weather?q=" + cidade +  "&appid=" + chave +
      "&lang=pt_br" + "&units=metric"
     
    )
    .then(resposta => resposta.json())  //resposta do servidor

      colocarNaTela(dados)
}

  function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
  }
