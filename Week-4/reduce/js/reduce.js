let numbers = [];
let numbersList = document.getElementById("numbersList");
let totalElement = document.getElementById("total");
let squaresList = document.getElementById("squaresList");
let squaresTotalElement = document.getElementById("squaresTotal");
let averageElement = document.getElementById("average");
let squaresTotalAvarageElement = document.getElementById("squaresSumAvarage");

function ekle() {
    let inputNumber = document.getElementById("number").value;
    if (inputNumber !== "") {
        numbers.push(Number(inputNumber));
        numbersList.textContent = numbers.join(", ");
        hesapla();
    }
    document.getElementById("number").value = "";
}

function hesapla() {
    // Total

    let total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    totalElement.textContent = total;


    // Dizi elemanlarının karesini alıp toplama işlemi
    let squaresTotal = numbers.reduce((accumulator, currentValue) => accumulator + currentValue * currentValue, 0)
    squaresTotalElement.textContent = squaresTotal;
    //Kare Hesaplama
    squaresList.textContent = numbers.map(num => num * num
    ).join(", ");


    // Ortalama hesaplama
    let average = total / numbers.length;
    averageElement.textContent = average;

    //Karelerin Ortalaması
    let squaresTotalAvarage = squaresTotal / numbers.length;
    squaresTotalAvarageElement.textContent = squaresTotalAvarage;
}