// function toggleMode() {
//   const html = document.documentElement
//   // if (html.classList.contains("light")) {
//   //   html.classList.remove("light")
//   // } else {
//   //   html.classList.add("light")
//   // }

//   html.classList.toggle("light") **maneira simplificada
// }
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  //**querySelector seleciona os elementos html através dos seletores
  const imagem = document.querySelector("#profile img")

  //substituir a imagem

  if (html.classList.contains("light")) {
    //se tiver light mode, adicioonar a imagem light
    imagem.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    imagem.setAttribute("src", "./assets/avatar.png")
  }
}
