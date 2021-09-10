//area of trapezoid calculator

//event listener
document.getElementById("calculateButton").addEventListener("click", calculateAreaOfTrapezoid);

//event function
function calculateAreaOfTrapezoid() {
    //input (converts input into number data type)
    let sideA = +document.getElementById("sideA").value;
    let sideB = +document.getElementById("sideB").value;
    let height = +document.getElementById("height").value;

    //process
    let area = ((sideA + sideB) / 2) * height;

    //output
    document.getElementById("areaOutput").innerHTML = area;
}