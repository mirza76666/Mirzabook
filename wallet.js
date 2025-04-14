// wallet.js
let walletBalance = localStorage.getItem("walletBalance");
if (walletBalance === null) {
  walletBalance = 0;
  localStorage.setItem("walletBalance", walletBalance);
}

function getBalance() {
  return parseFloat(localStorage.getItem("walletBalance") || "0");
}

function updateBalance(amount) {
  walletBalance = getBalance() + amount;
  localStorage.setItem("walletBalance", walletBalance);
  showBalance(); // auto update
}

function showBalance() {
  const walletSpan = document.getElementById("wallet-balance");
  if (walletSpan) {
    walletSpan.textContent = "₹" + getBalance().toFixed(2);
  }
}

function placeBet(amount) {
  let balance = getBalance();
  if (amount > balance) {
    alert("Insufficient Balance");
    return false;
  } else {
    updateBalance(-amount);
    alert("Bet Placed Successfully");
    return true;
  }
}

// Call showBalance on page load
document.addEventListener("DOMContentLoaded", showBalance);
