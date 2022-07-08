let btn = document.querySelector(".btn");
let modal = document.querySelector("#simpleModal");
let closeBtn = document.querySelector(".closeBtn");
let fName = document.querySelector("#fName");
let lName = document.querySelector("#lName");

btn.addEventListener("click", modalOpen);
closeBtn.addEventListener("click", closeBtnClose);
window.addEventListener("click", ousideClick);

btn.addEventListener("click", function() {
    let weight = parseInt(document.getElementById("weight-input").value);
    let height = parseInt(document.getElementById("height-input").value);
    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let bmiCalculate = (weight / (height * height) * 10000).toFixed(2);
    // console.log(bmiCalculate)
    document.getElementById("bmi-output").value = bmiCalculate;

    if (bmiCalculate < 18.5) {
        output.innerHTML = `${fName} ${lName} you are underweight.`; 
        output.style.color = "lightskyblue";  
    }else if (bmiCalculate >= 18.5 && bmiCalculate < 25) {
        output.innerHTML = `${fName} ${lName} congrats, you are in a good shape.`;
        output.style.color = "lightgreen"; 
    }else if (bmiCalculate >= 25 && bmiCalculate < 30) {
        output.innerHTML = `${fName} ${lName} be careful, you are overweight.`;
        output.style.color = "orange"; 
    }else if (bmiCalculate >= 30) {
        output.innerHTML = `${fName} ${lName} congrats, there is no hope for you.`;
        output.style.color = "darkred"; 
    }
})

function modalOpen() {
    modal.style.display = "block";
}

function closeBtnClose() {
    modal.style.display = "none";
}

function ousideClick(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}