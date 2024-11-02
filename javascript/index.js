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


//Maldives
let maldivesElement = document.querySelector("#maldives");
let maldivesDateElement = maldivesElement.querySelector(".date");
let maldivesTimeElement = maldivesElement.querySelector(".time");
let maldivesTime = moment().tz("Indian/Maldives");

maldivesDateElement.innerHTML = maldivesTime.format("dddd, Do MMMM YYYY");
maldivesTimeElement.innerHTML = maldivesTime.format("HH:mm:ss [<small>]A[</small>]"
);
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("dddd, Do MMMM YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("HH:mm:ss")}<small>${cityTime.format("A")}</small></div>
</div>

<a href="index.html">Back<a>
`;
setTimeout(() => {
    updateCity(event);
  }, 1000);
    }


let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity)

updateTime();
setInterval(updateTime, 1000);