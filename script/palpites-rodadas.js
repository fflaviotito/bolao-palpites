// Variáveis globais
const todosElementos = document.querySelectorAll('*')
const rodada = document.getElementsByClassName('indicador') [0]
const beforeRodada = document.getElementById('before-rodada')
const nextRodada = document.getElementById('next-rodada')
const time = document.querySelectorAll('.jogo > label')
const escudoTime = document.querySelectorAll('.jogo > img')
const palpite = document.querySelectorAll('.jogo > input')
var contador = 1

// Indicador de Rodada sempre começa na rodada 1
rodada.innerHTML = `Rodada ${contador}`

// Colocando o escudo conforme nome do time
for (var i = 0; i < escudoTime.length; i++) {
    var labelTime = time[i].innerHTML
    var minusculo = labelTime.toLocaleLowerCase()
    var nomeTime = minusculo.replace(/\s/g, "")
    escudoTime[i].src = `imagens/escudos-times/${nomeTime}.png`
    escudoTime[i].alt = `Escudo do time ${labelTime}`
}

// Evento de clique no botão next rodada
nextRodada.addEventListener('click', function next_Rodada() {
    if (contador < 38) {
        contador++
        rodada.innerHTML = `Rodada ${contador}`
    }
})

// Evento de clique no botão before rodada
beforeRodada.addEventListener('click', function before_Rodada() {
    if (contador > 1) {
        contador--
        rodada.innerHTML = `Rodada ${contador}`
    }
})

// Evento de clique no escudo do time
escudoTime.forEach(function(img, indice) {
    img.addEventListener("click", function() {
        palpite[indice].focus()
    })
})

// Evento para restringir as input de palpites (apenas números e máximo de 2 caracteres)
palpite.forEach(function(event) {
    event.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, "")
        if (this.value.length > 2) {
            this.value = this.value.slice(0, 2);
        }
    })
})

// Evento para que a imagen não seja arrastada até os input
todosElementos.forEach(function(event) {
    event.ondragstart = function () {
        return false
    }
})