const miningButton = document.getElementById("mining");
miningButton.addEventListener("click", () => {
  // send the user to the mining page
  window.location.href = "./pages/mine.html";
});

const accountsButton = document.getElementById("accounts");
accountsButton.addEventListener("click", () => {
  // send the user to the accounts page
  window.location.href = "./pages/accounts.html";
});
