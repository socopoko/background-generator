var c1 = document.querySelector(".color1");
var c2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient")

function backGen()
{
    body.style.background = "linear-gradient(to right," + c1.value + "," + c2.value + ")";

    css.textContent = body.style.background + ";";
}

c1.addEventListener("input",backGen);
c2.addEventListener("input",backGen);
