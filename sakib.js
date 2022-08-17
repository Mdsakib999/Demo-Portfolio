let menu = document.querySelector('#menu-btn');
let head = document.querySelector('.head');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    head.classList.toggle('active');
}

let thmTog = document.querySelector('#thm-tog');

thmTog.onclick = () => {
    thmTog.classList.toggle('fa-sun'); 
    if(thmTog.classList.contains('fa-sun')) {
        document.body.classList.add('active')
    }
    else {
        document.body.classList.remove('active');
    }
}