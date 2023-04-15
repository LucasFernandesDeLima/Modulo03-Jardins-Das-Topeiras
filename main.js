// function reloadPage() {
//   location.reload()
// }

// setInterval(reloadPage, 4200)

function reloadPage() {
  const gridBuracos = document.querySelector('.grid-buracos')
  gridBuracos.classList.toggle('show')
}

setInterval(reloadPage, 3500)
