const cards = document.querySelectorAll('.card');
const btnRedefinir = document.getElementById('btnRedefinir');

cards.forEach(cardos => {
    cardos.addEventListener("click", () => {
        cardos.classList.toggle("selecionado")
    })
})

cards.forEach(card => {
    btnRedefinir.addEventListener("click", () => {
        card.classList.remove("selecionado")
    })
})