let cursos = [
    {curso:"Matematica",vagas:30},
    {curso:"Fisica",vagas:30},
    {curso:"Quimica",vagas:30},
    {curso:"Geografia",vagas:30},
    {curso:"Historia",vagas:30},

];


let vagasDisponiveis = document.getElementById("vagas")
let i=0;

while(cursos[i]) {
let tr = document.createElement('tr')

let td1 = document.createElement('td')
let td2 = document.createElement('td')

td1.innerHTML = cursos[i].curso
td2.innerHTML = cursos[i].vagas

tr.appendChild(td1)
tr.appendChild(td2)

vagasDisponiveis.appendChild(tr)
i++
}
// escutar o uso de vagas para baixar no site


var nomeform= document.getElementById("NOME")  
var cursoform=document.getElementById("CURSO")
var cpfform=document.getElementById("CPF")
var rgform=document.getElementById("RG")
var datanascform=document.getElementById("DATANASC")


form = document.getElementById("CADASTRO")

form.addEventListener('submit',function(e){
    let candidato = {
        nome:nomeform.value,
        curso:cursoform.value,
        cpf:cpfform.value,
        rg:rgform.value,
        datanasc:datanascform.value,
        
    }
    
    console.log(candidato)
    e.preventDefault();
})
