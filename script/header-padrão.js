// Variáveis Globais
const menuItem = document.querySelectorAll('.item-menu')
const menu_btnExpandir = document.querySelector('.btn-expandir > .material-symbols-outlined')
const sideBar = document.getElementsByClassName('menu-lateral') [0]

// Botão para o menu expandir e recolher
menu_btnExpandir.addEventListener('click', function() {
    sideBar.classList.toggle('expandir')
})

// Menu sempre selecionado
function menuItemSelect() {
    menuItem.forEach((item) =>
        item.classList.remove('item-menu-active')
    )
    this.classList.add('item-menu-active')
}

menuItem.forEach((item) =>
    item.addEventListener('click', menuItemSelect)
)

// Evento para que a imagen não seja arrastada até os input
menuItem.forEach(function(event) {
    event.ondragstart = function () {
        return false
    }
})