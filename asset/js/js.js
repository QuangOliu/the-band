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

//dong mow menu
const header = document.getElementById("header")
const bar = document.querySelector('.js-bar')
const headerHeight = header.clientHeight

bar.onclick = function() {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = null;
    }
}

// tu dong dong menu
const menuIterms = document.querySelectorAll('#nav li a[href*="#"')

for (var i =0; i< menuIterms.length; i++) {
    var menuIterm = menuIterms[i];
    
    menuIterm.onclick = function(event) {
        var isParent = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        if (isParent) {
            event.preventDefault();
        }
        else {
            header.style.height = null;
        }
    }
}
// khong dong menu khi chon more