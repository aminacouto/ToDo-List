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
    
    var dataFormatada = dia + '-' + mes + '-' + ano;
    document.getElementById('dataAtual').innerText = dataFormatada;
});


//Calendário

function mudouTamanho(){
    if (window.innerWidth >= 768) {
        calendar.style.display = 'block'
    } else {
        calendar.style.display = 'none'
    }
}

function clickMenu(){
    if (calendar.style.display === 'block') {
        calendar.style.display = 'none'
    } else {
        calendar.style.display = 'block'
    }
}
window.onload = mudouTamanho;

document.addEventListener('DOMContentLoaded', function() {
    const daysContainer = document.getElementById('days');
    const monthYear = document.getElementById('month-year');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    const months = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    function renderCalendar(month, year) {
        daysContainer.innerHTML = '';
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
        const lastDayOfLastMonth = month === 0 ? new Date(year - 1, 11, 0).getDate() : new Date(year, month, 0).getDate();

        // Month and year
        monthYear.textContent = `${months[month]} ${year}`;

        // Days of previous month
        for (let i = firstDayOfMonth; i > 0; i--) {
            daysContainer.innerHTML += `<div class="day inactive">${lastDayOfLastMonth - i + 1}</div>`;
        }

        // Days of current month
        for (let i = 1; i <= lastDateOfMonth; i++) {
            daysContainer.innerHTML += `<div class="day">${i}</div>`;
        }

        // Remaining days to fill the last row
        const remainingDays = 42 - (firstDayOfMonth + lastDateOfMonth);
        for (let i = 1; i <= remainingDays; i++) {
            daysContainer.innerHTML += `<div class="day inactive">${i}</div>`;
        }
    }

    prevButton.addEventListener('click', function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
    });

    nextButton.addEventListener('click', function() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
    });

    renderCalendar(currentMonth, currentYear);
});
