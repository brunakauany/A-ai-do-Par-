var imgs = document.getElementById('slides2')
var img = document.querySelectorAll('#slides2 img')

let imagemAtual = 0

function transicao(){
    imagemAtual++
    if(imagemAtual > img.length - 1){
        imagemAtual = 0
    }
    imgs.style.transform = `translateX(${-imagemAtual * 26}vw)`
}

setInterval(transicao, 5000)