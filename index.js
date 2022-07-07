let btn = document.querySelector(".btn");
let modal = document.querySelector("#simpleModal");
var closeBtn = document.querySelector(".closeBtn");
let fName = document.querySelector("#fName");
let lName = document.querySelector("#lName");

btn.addEventListener("click", modalOpen);
closeBtn.addEventListener("click", closeBtn);
window.addEventListener("click", ousideClick);

btn.addEventListener("click", function() {
    let weight = parseInt(document.getElementById("weight-input").value);
    let height = parseInt(document.getElementById("height-input").value);
    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let bmiCalculate = (weight / (height * height) * 10000);
    // console.log(bmiCalculate)
    document.getElementById("bmi-output").value = bmiCalculate;

    if (bmiCalculate < 18.5) {
        output.innerHTML = `${fName} ${lName} you are underweight.`;
    }else if (bmiCalculate >= 18.5 && bmiCalculate < 25) {
        output1.innerHTML = `${fName} ${lName} congrats, you are in a good shape.`;
    }else if (bmiCalculate >= 25 && bmiCalculate < 30) {
        output2.innerHTML = `${fName} ${lName} be careful, you are overweight.`;
    }else if (bmiCalculate >= 30) {
        output3.innerHTML = `${fName} ${lName} congrats, there is no hope for you.`;
    }

})

function modalOpen() {
    modal.style.display = "block";
}

function closeBtn(e) {
    modal.style.display = "none";
}

function ousideClick(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}