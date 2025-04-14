let walletBalance = 1000;

function placeBet(amount) {
  if (walletBalance >= amount) {
    walletBalance -= amount;
    alert("Bet placed! Remaining balance: ₹" + walletBalance);
  } else {
    alert("Insufficient balance!");
  }
}
