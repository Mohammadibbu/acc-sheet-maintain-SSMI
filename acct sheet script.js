const mltype = document.getElementById("mlUnit");
const Quantity = document.getElementById("Quantity");
const amount = document.getElementById("amt");
let rs;
// console.log(mltype.value);

function calculate_amt() {
  if (mltype.value === "3ml") {
    rs = 25;
  } else if (mltype.value === "6ml") {
    rs = 50;
  } else if (mltype.value === "8ml") {
    rs = 70;
  } else {
    rs = 0;
  }
  Quantity.removeAttribute("disabled");
  amount.removeAttribute("disabled");
  cal();
}
function cal() {
  if (Quantity.value > 0 && Quantity.value < 51) {
    amount.value = rs * Quantity.value;
    // console.log(rs, Number(Quantity.value));
  } else {
    Quantity.value = "";
    // alert("quantity should be in 1 to 50");
  }
}
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxqRHW9Rc3fLF9_pPDXOQHgI7TBWdqAl307TrBtEd1fSpDnaXD7NiVDpBg4OzyDXcSC4g/exec";
const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("btn").innerText = "Please wait...";
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      alert("Added successfully...");
      location.reload();
      document.getElementById("btn").innerText = "Submit";
    })

    .catch((error) => alert("not sent ! something went wrong..."));
});
