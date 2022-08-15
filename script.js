// >>> DECLARAÇÃO DE VARIÁVEIS <<<
let nometxt = document.getElementById('nometxt');
let cpftxt = document.getElementById('cpftxt');
let celulartxt = document.getElementById('numerotxt');
let btEnviar = document.getElementById('btnEnviar');
let btDados = document.getElementById('btnDados');
let dados = []
let i=0

// >>> EVENTOS <<<
btEnviar.addEventListener("click",AddDados)
btDados.addEventListener('click', ExDados)

function AddDados(){
    let dados1={}

    dados1.nome=nometxt.value
    dados1.numero=celulartxt.value
    dados1.cpf=cpftxt.value

    dados[i]=dados1
    console.log(dados[i])
    nometxt.value=""
    numerotxt.value=""
    cpftxt.value=""
    i++
}
function ExDados(){
    document.querySelector('h3').innerText="Vazamento de dados"
    document.querySelector('#nometxt').remove()
    document.querySelector("#cpftxt").remove()
    document.querySelector('#numerotxt').remove()
    document.querySelector('#btnEnviar').remove()
    document.querySelector('#btnDados').remove()

    for(let i=0; i<=dados.length; i++){
        let txt=document.createTextNode("Nome: "+dados[i].nome + " | Número: " + dados[i].numero + " | CPF: " + dados[i].cpf)
        let txtP=document.createElement('p')
        txtP.appendChild(txt)
        document.querySelector('form').appendChild(txtP)
    }
}