let secund = document.querySelector(".secund");
let minut = document.querySelector(".minut");
let hour = document.querySelector(".hour");



setInterval(m,(1/6)*1000);
setInterval(s, (1/6)*1000);
setInterval(h, 1000);


function s() {
    // console.log(new Date().getSeconds());
    
    secund.style.transform = `rotate(${new Date().getSeconds()*6}deg)`;
    
}
function m() {
    // console.log(new Date().getMinutes());
    minut.style.transform = `rotate(${new Date().getMinutes() * 6}deg)`;
}

function h() {
    // console.log(new Date().getHours());
    hour.style.transform = `rotate(${(new Date().getHours() - 12) * 30 }deg)`; 
}


