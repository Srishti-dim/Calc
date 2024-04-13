function validateInputs() {
    const income = parseFloat(document.getElementById('income').value);
    const extraIncome = parseFloat(document.getElementById('extra-income').value);
    const deductions = parseFloat(document.getElementById('deductions').value);
    const age = document.getElementById('age').value;
  
    const incomeErrorIcon = document.getElementById('income-error');
    const extraIncomeErrorIcon = document.getElementById('extra-income-error');
    const deductionsErrorIcon = document.getElementById('deductions-error');
    const ageErrorIcon = document.getElementById('age-error');
  
    let hasError = false;
  
    if (isNaN(income)) {
      incomeErrorIcon.innerHTML = "!";
      incomeErrorIcon.style.display = "block";
      hasError = true;
    } else {
      incomeErrorIcon.style.display = "none";
    }
  
    if (isNaN(extraIncome)) {
      extraIncomeErrorIcon.innerHTML = "!";
      extraIncomeErrorIcon.style.display = "block";
      hasError = true;
    } else {
      extraIncomeErrorIcon.style.display = "none";
    }
  
    if (isNaN(deductions)) {
      deductionsErrorIcon.innerHTML = "!";
      deductionsErrorIcon.style.display = "block";
      hasError = true;
    } else {
      deductionsErrorIcon.style.display = "none";
    }
  
    if (age === "") {
      ageErrorIcon.innerHTML = "!";
      ageErrorIcon.style.display = "block";
      hasError = true;
    } else {
      ageErrorIcon.style.display = "none";
    }
  
    if (!hasError) {
      calculateTax(income, extraIncome, deductions, age);
    }
  }
  
  function calculateTax(income, extraIncome, deductions, age) {
    let tax = 0;
    const totalIncome = income + extraIncome - deductions;
    
    if (totalIncome <= 800000) {
      tax = 0;
    } else {
      const taxableAmount = totalIncome - 800000;
      if (age === "<40") {
        tax = 0.3 * taxableAmount;
      } else if (age === ">=40 <60") {
        tax = 0.4 * taxableAmount;
      } else {
        tax = 0.1 * taxableAmount;
      }
    }
  
    displayResult(tax);
  }
  
  function displayResult(tax) {
    const modal = document.getElementById("myModal");
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Your tax amount is: ₹${tax.toFixed(2)}</p>`;
    modal.style.display = "block";
    
    const span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
  