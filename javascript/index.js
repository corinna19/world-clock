function updateTime(){
//Paris
let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML = parisTime.format("dddd, Do MMMM YYYY");
parisTimeElement.innerHTML = parisTime.format("HH:mm:ss [<small>]A[</small>]"
);

//New York
let newYorkElement = document.querySelector("#new-york");
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");
let newYorkTime = moment().tz("America/New_York");

newYorkDateElement.innerHTML = newYorkTime.format("dddd, Do MMMM YYYY");
newYorkTimeElement.innerHTML = newYorkTime.format("HH:mm:ss [<small>]A[</small>]"
);

}

updateTime();
setInterval(updateTime, 1000);