/* ----------------------ABRIR O MODAL------------------*/

const abrirmodal1 = document.querySelector('#ml300')
const abrirmodal2 = document.querySelector('#ml500')
const abrirmodal3 = document.querySelector('#ml700')
const abrirmodal4 = document.querySelector('#l1')
const fecharmodal = document.querySelector('#fechar')
const abrirmodal5 = document.querySelector('#granola')
const abrirmodal6 = document.querySelector('#confete')
const abrirmodal7 = document.querySelector('#coco')
const abrirmodal8 = document.querySelector('#kiwi')
const abrirmodal9 = document.querySelector('#amendoim')
const abrirmodal10 = document.querySelector('#uvapassa')
const abrirmodal11 = document.querySelector('#banana')
const abrirmodal12 = document.querySelector('#morango')
const abrirmodal13 = document.querySelector('#leite')
const abrirmodal14 = document.querySelector('#pacoca')
const abrirmodal15 = document.querySelector('#coberturacondensado')
const abrirmodal16 = document.querySelector('#coberturamorango')
const abrirmodal17 = document.querySelector('#coberturachoco')
const fade = document.querySelector('#fade')
const modal = document.querySelector('#modal')
const eventos = [abrirmodal1,abrirmodal2, abrirmodal3,abrirmodal4,abrirmodal5,
    abrirmodal6,abrirmodal7,abrirmodal8,abrirmodal9,abrirmodal10,abrirmodal11,
    abrirmodal12,abrirmodal13,abrirmodal14,abrirmodal15,abrirmodal16,abrirmodal17,fade,fecharmodal]

const toggleModal = ()=>{
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
}

eventos.map((el)=>{
    el.addEventListener('click', ()=> toggleModal())
})



/*--------------- ADICIONAR AO CARRINHO -------------*/


var botoesCopos = document.querySelectorAll('.botoesCopos')
var acai = document.getElementById('acai')
var copo1 = document.getElementById('ml300')
var copo2 = document.getElementById('ml500')
var copo3 = document.getElementById('ml700')
var copo4 = document.getElementById('l1')

var addCarrinho = document.getElementById('add-carrinho')
var carrinho = document.getElementById('carrinho')
var txtquantidade = document.getElementById('quantidade')
var valor = document.getElementById('valor')
var valorTotal = document.getElementById('valorTotal')
var qtdacai = document.getElementById('qtd-acai')
var soma  = 0
var totalAcai = 0

var acais = [
    {nome: 'Açaí: 300 ml', valor: 8.00},
    {nome: 'Açaí: 500 ml', valor: 12.00},
    {nome: 'Açaí: 700 ml', valor: 17.00},
    {nome: 'Açaí: 1 L', valor: 26.00},
]

copo1.addEventListener(`click`, ()=>{
    valorp= 8.00
   acai.value = acais[0].nome
   
})
copo2.addEventListener(`click`, ()=>{
   acai.value = acais[1].nome
   valorp= 12.00
})
copo3.addEventListener(`click`, ()=>{
   acai.value = acais[2].nome
   valorp= 17.00
})
copo4.addEventListener(`click`, ()=>{
   acai.value = acais[3].nome
   valorp= 26.00
})



addCarrinho.addEventListener('click', ()=>{
    var qtd = Number(qtdacai.value)
    var opcao = acai.value
     totalAcai = qtd * valorp
    carrinho.innerHTML += `<p>${opcao} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${qtd} 
    &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbspR$ &nbsp &nbsp &nbsp${totalAcai}</p>`
    
    soma += totalAcai
    valorTotal.innerHTML = `<p>TOTAL: R$${soma} </p>`
})


/*--------------- ADICIONAR AO CARRINHO COMPLEMENTOS E COBERTURA-------------*/


var botoesComplementos = document.querySelectorAll('.botoesComplementos')
var compCober = document.getElementById('complementosecobertura')
var granola = document.getElementById('granola')
var confete = document.getElementById('confete')
var coco = document.getElementById('coco')
var amendoim = document.getElementById('amendoim')
var uvapassa = document.getElementById('uvapassa')
var banana = document.getElementById('banana')
var morango = document.getElementById('morango')
var leite = document.getElementById('leite')
var pacoca = document.getElementById('pacoca')
var kiwi = document.getElementById('kiwi')
var coberturacondensado = document.getElementById('coberturacondensado')
var coberturamorango = document.getElementById('coberturamorango')
var coberturachoco = document.getElementById('coberturachoco')


var addCarrinho2 = document.getElementById('add-carrinho2')
var carrinho = document.getElementById('carrinho')


var item = [
    {nome: 'Granola', valor: 0},
    {nome: 'Confete', valor: 0},
    {nome: 'Coco Ralado', valor: 0},
    {nome: 'Amendoim', valor: 0},
    {nome: 'Uva Passa', valor: 0},
    {nome: 'Banana', valor: 0},
    {nome: 'Morango', valor: 0},
    {nome: 'Leite em Pó', valor: 0},
    {nome: 'Paçoca', valor: 0},
    {nome: 'Kiwi', valor: 0},
    {nome: 'Cobertura Condensado', valor: 0},
    {nome: 'Cobertura de Morango', valor: 0},
    {nome: 'Cobertura Chocolate', valor: 0},
]

granola.addEventListener(`click`, ()=>{
    compCober.value = item[0].nome
   
})
confete.addEventListener(`click`, ()=>{
    compCober.value = item[1].nome
   
})
coco.addEventListener(`click`, ()=>{
    compCober.value = item[2].nome
   
})
amendoim.addEventListener(`click`, ()=>{
    compCober.value = item[3].nome
   
})
uvapassa.addEventListener(`click`, ()=>{
    compCober.value = item[4].nome
   
})
banana.addEventListener(`click`, ()=>{
    compCober.value = item[5].nome
   
})
morango.addEventListener(`click`, ()=>{
    compCober.value = item[6].nome
   
})
leite.addEventListener(`click`, ()=>{
    compCober.value = item[7].nome
   
})
pacoca.addEventListener(`click`, ()=>{
    compCober.value = item[8].nome
   
})
kiwi.addEventListener(`click`, ()=>{
    compCober.value = item[9].nome
   
})
coberturacondensado.addEventListener(`click`, ()=>{
    compCober.value = item[10].nome
   
})
coberturamorango.addEventListener(`click`, ()=>{
    compCober.value = item[11].nome
  
})
coberturachoco.addEventListener(`click`, ()=>{
    compCober.value = item[12].nome
   
})


addCarrinho2.addEventListener('click', ()=>{

    var opcaoo = compCober.value
    carrinho.innerHTML += `<p>${opcaoo}</p>`
    complementoss.innerHTML += `<p>ITEM: - ${opcaoo} </p>`
})