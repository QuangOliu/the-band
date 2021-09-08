const buyBtns = document.querySelectorAll('.js-buy-ticket')
const model = document.querySelector('.js-model')
const modelContainer = document.querySelector('.js-model-container')
const close = document.querySelector('.js-close')

function showBuyTickets() {
    model.classList.add('open')
}

function hidenBuy() {
    model.classList.remove('open')
}

for(const buyBtn of buyBtns) {
    buyBtn.addEventListener('click',showBuyTickets)
}

close.addEventListener('click',hidenBuy)

model.addEventListener('click',hidenBuy)
modelContainer.addEventListener('click',function(Event) {
    Event.stopPropagation()
})