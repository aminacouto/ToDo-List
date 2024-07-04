const button = document.querySelector('.button-add')
const input = document.querySelector('.input')
const listaCompleta = document.querySelector('.lista')

let listaDeItens = []

function addNovaTarefa(){
    listaDeItens.push({
        tarefa: input.value,
        concuida: false
    })

    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas(){
    let novaLi = ''

    listaDeItens.forEach((item, posicao) => {
        novaLi = novaLi + `
            <li class="itens ${item.concluida && "done"}">
                <img src="imagens/check b.png" alt="Check" onclick="concluirTarefa(${posicao})">
                <p>${item.tarefa}</p>
                <img src="imagens/delete b.png" alt="Delete" onclick="deletarItem(${posicao})">
            </li>
            `
    })
listaCompleta.innerHTML = novaLi

localStorage.setItem('lista', JSON.stringify(listaDeItens))

}
function concluirTarefa(posicao) {
    listaDeItens[posicao].concluida = !listaDeItens[posicao].concluida
    mostrarTarefas()
}

function deletarItem(posicao) {
    listaDeItens.splice(posicao, 1)
    mostrarTarefas()
}
function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if(tarefasDoLocalStorage){
    listaDeItens = JSON.parse(tarefasDoLocalStorage)
    }
    mostrarTarefas()
}

recarregarTarefas()

button.addEventListener('click', addNovaTarefa)

document.addEventListener("DOMContentLoaded", function() {
    var dataAtual = new Date();
    var dia = String(dataAtual.getDate()).padStart(2, '0');
    var mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    var ano = dataAtual.getFullYear();
    
    var dataFormatada = dia + '/' + mes + '/' + ano;
    document.getElementById('dataAtual').innerText = dataFormatada;
});
