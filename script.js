const btn = document.getElementById("btn");
const body = document.querySelector("body")

const showColors = () => {
   const colors = ["red", "yellow", "blue", "pink", "purple", "cyan", "orange"];
   const random = Math.floor(Math.random ()* colors.length);
   body.style.backgroundColor = colors[random]
}

btn.addEventListener("click", showColors);