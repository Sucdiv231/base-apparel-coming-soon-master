/** @format */

const errorMssg = document.querySelector(".err_mesg");
const btn = document.querySelector("button");
const input = document.querySelector("input");

function error(e) {
  e.preventDefault();
  if (!input.value) {
    setTimeout(() => {
      errorMssg.style.display = "none";
    }, 1000);
    errorMssg.style.display = "flex";
  } else {
    input.value = "";
  }
}

btn.addEventListener("click", error);
