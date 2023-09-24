const value = document.getElementById("value");
const btnPlus = document.getElementById("btn_plus");
const btnMinus = document.getElementById("btn_minus");
const reset = document.getElementById("btn_reset");

const updateValue = () => {
  value.innerHTML = count;
};

let count = 0;
let intervalId = 0;

btnPlus.addEventListener("mousedown", () => {
  count += 1;
  updateValue();
  intervalId = setInterval(() => {
    count += 1;
    updateValue();
  }, 100);
});

btnMinus.addEventListener("mousedown", () => {
  count -= 1;
  updateValue();
  intervalId = setInterval(() => {
    count -= 1;
    updateValue();
  }, 100);
});

reset.addEventListener("click", () => {
  count = 0;
  updateValue();
});

document.addEventListener("mouseup", () => clearInterval(intervalId));
