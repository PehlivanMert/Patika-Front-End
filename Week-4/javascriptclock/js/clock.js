// Girilen ismi ekrana yazdırma
var userName = prompt("Lütfen isminizi giriniz:");
var myName = document.getElementById("myName");
myName.innerText = userName;


// Saat ve günü yazdırma 
let currentTimeAndDay = () => {
    var days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var dayIndex = now.getDay();
    var dayName = days[dayIndex - 1];
    
    var clockDisplay = document.getElementById("myClock");
    clockDisplay.innerText = hour + ":" + minute + ":" + second + " " + dayName;
}

setInterval(currentTimeAndDay, 1000); // Her saniyede bir güncelle