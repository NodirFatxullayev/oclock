let secund = document.querySelector(".secund");
let minut = document.querySelector(".minut");



setInterval(m,(1/6)*1000);
setInterval(s, (1/6)*1000);


function s() {
    // console.log(new Date().getSeconds());
    
    secund.style.transform = `rotate(${new Date().getSeconds()*6}deg)`;
    
}
function m() {
    // console.log(new Date().getMinutes());
    minut.style.transform = `rotate(${new Date().getMinutes() * 6}deg)`;
}


