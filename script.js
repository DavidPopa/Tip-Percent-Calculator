let btn = document.getElementById("calculate");
let billAmount = document.getElementById("bill-amount");
let percentageTip = document.getElementById("percentage-tip");
let tipAmount = document.getElementById("tip-amount");
let total = document.getElementById("total");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (billAmount.value === "" || billAmount.value <= 0) {
    alert("wrong");
    billAmount.value = "";
  } else if (percentageTip.value === "" || percentageTip.value <= 0) {
    alert("wrong");
    percentageTip.value = "";
  } else {
    let calculatedTip = (percentageTip.value / 100) * billAmount.value;
    tipAmount.innerHTML = "$" + calculatedTip;
    console.log((tipAmount.innerHTML = "$" + calculatedTip));

    let calculatedTotal = calculatedTip + billAmount.value;
    total.innerHTML = "$" + calculatedTotal;
  }
});
