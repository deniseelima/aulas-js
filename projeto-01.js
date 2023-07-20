const convertButton = document.querySelector("#convert-button")
const dolarEuro = document.querySelector(".dolar-euro")

function convertValues() {
  const valor = document.querySelector("#valor").value
  const moedaValor = document.querySelector(".moeda-valor")
  const valorConvertido = document.querySelector(".valor-convertido")

  console.log(dolarEuro.value)

  const dolar = 5.20
  const euro = 6.20


  if (dolarEuro.value == "dolar") {
    valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(valor / dolar)

  }

  if (dolarEuro.value == "euro") {
    valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(valor / euro)


  }

  moedaValor.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(valor)
}


function trocarMoeda() {
  const moedaNome = document.querySelector("#moeda-nome")
  const image = document.querySelector(".imagem-oculta")

  if (dolarEuro.value == "dolar") {
    moedaNome.innerHTML = "Dólar Americano"
    image.src = "./estados-unidos (1) 1.png"

  }
  if (dolarEuro.value == "euro") {
    moedaNome.innerHTML = "Euro"
    image.src = "./Design sem nome 3.png"

  }

  convertValues()
}

convertButton.addEventListener("click", convertValues)
dolarEuro.addEventListener("change", trocarMoeda)