const planBtns = document.querySelectorAll('.plan_Wrapper button');
const planWindow = document.querySelector('.plan_Window');
const planWrapper = document.querySelectorAll('.plan_Wrapper');
const textH1 = document.querySelector('h1');
const textUnderH1 = document.querySelector('.underH1');
let number = 0;
let check = true;
planBtns.forEach(button => {
    button.addEventListener('click', () => {
        planWindow.classList.toggle('active')
        textH1.classList.toggle('active')
        if (check === true) {
            planBtns.forEach(btn => btn.textContent = 'Choose')
            check = false;
        } else {
            button.textContent = 'Other payments'
            check = true
        }
    })

})


planWrapper.forEach(plan => plan.addEventListener('click', (e) => {

    if (e.target.tagName === 'BUTTON') {
        number--
        e.path[1].style.order = `${number}`
    }

    if (planWindow.className == 'active') {

    }
}))