let btn = document.querySelector(".btn");

btn.addEventListener("click", function() {
    let weight = parseInt(document.getElementById("weight-input").value);
    let height = parseInt(document.getElementById("height-input").value);
    let bmiCalculate = (weight / (height * height) * 10000);
    // console.log(bmiCalculate)
    document.getElementById("bmi-output").value = bmiCalculate;

    if (bmiCalculate < 18.5) {
        output.innerHTML = "You are underweight."
    }else if (bmiCalculate >= 18.5 && bmiCalculate < 25) {
        output1.innerHTML = "Congrats, you are in a good shape.";
    }else if (bmiCalculate >= 25 && bmiCalculate < 30) {
        output2.innerHTML = "Be careful, you are overweight." ;
    }else if (bmiCalculate >= 30) {
        output3.innerHTML = "Congrats, there is no hope for you." ;
    }

})

