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

}
function concluirTarefa(posicao) {
    listaDeItens[posicao].concluida = !listaDeItens[posicao].concluida
    mostrarTarefas()
}

function deletarItem(posicao) {
    listaDeItens.splice(posicao, 1)
    mostrarTarefas()

}

button.addEventListener('click', addNovaTarefa)