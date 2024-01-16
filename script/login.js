// Variáveis globais
const textBox = document.getElementsByClassName('box-text') [0]
const btnTextBox = document.querySelectorAll('.box-text .button')

// Evento de clique nos botões que trocam de formulário
btnTextBox.forEach(function(event) {
    event.addEventListener('click', function() {
        textBox.classList.toggle('toggle')
    })
})