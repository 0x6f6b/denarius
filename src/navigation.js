const accountsButton = document.getElementById("accounts-btn");
accountsButton.addEventListener("click", () => {
  // send the user to the accounts page
  window.location.href = "../pages/accounts.html";
});

const miningButton = document.getElementById("mining-btn");
miningButton.addEventListener("click", () => {
  // send the user to the mining page
  window.location.href = "../pages/mine.html";
});

const transactButton = document.getElementById("transact-btn");
transactButton.addEventListener("click", () => {
  // send the user to the transact page
  window.location.href = "../pages/transact.html";
});

const settingsButton = document.getElementById("settings-btn");
settingsButton.addEventListener("click", () => {
  // send the user to the settings page
  window.location.href = "../pages/settings.html";
});
