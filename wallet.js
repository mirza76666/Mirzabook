// wallet.js
function getWallet() {
  return parseFloat(localStorage.getItem("wallet")) || 0;
}

function updateWallet(amount) {
  localStorage.setItem("wallet", amount);
  document.getElementById("wallet-balance").textContent = "₹" + amount.toFixed(2);
}

function placeBet(amount, team) {
  let balance = getWallet();
  if (amount > balance) {
    alert("Insufficient balance!");
    return;
  }
  balance -= amount;
  updateWallet(balance);

  // Show placed bet amount
  const teamDiv = document.getElementById(`${team}-bet`);
  if (teamDiv) teamDiv.textContent = `Your Bet: ₹${amount}`;

  // Save for win/loss logic (simple demo)
  localStorage.setItem("myBetTeam", team);
  localStorage.setItem("myBetAmount", amount);
}

function checkWin(winningTeam) {
  const betTeam = localStorage.getItem("myBetTeam");
  const betAmount = parseFloat(localStorage.getItem("myBetAmount"));

  if (betTeam === winningTeam) {
    let newBalance = getWallet() + betAmount * 2.5;
    updateWallet(newBalance);
    alert("Congratulations! You won the bet.");
  } else {
    alert("You lost the bet.");
  }

  localStorage.removeItem("myBetTeam");
  localStorage.removeItem("myBetAmount");
}

window.onload = function () {
  if (document.getElementById("wallet-balance")) {
    updateWallet(getWallet());
  }
};
