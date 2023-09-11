window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  console.log(form)
  if (form) {
    console.log('hi')
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  console.log(document.getElementById("loan-amount"))
  document.getElementById("loan-amount").value = 10000
  document.getElementById("loan-years").value = 1/12
  document.getElementById("loan-rate").value = .05
  getCurrentUIValues() 
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let P = document.getElementById("loan-amount")
  let n = document.getElementById("loan-years")
  let i = document.getElementById("loan-rate")
  
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  values.amount = 10000
  values.years = 1
  values.rate = .05
  let P = values[amount]
  let n = values[years]/12
  let i = values[rate]/12
  return ((P*i)/(1-(1+i)^-n))
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}
