const emailCard = document.querySelector(".email-card");
const emailAdvice = document.querySelector(".span-advice");
const emailInput = document.querySelector(".email-input");

const emailSuccessCard = document.querySelector(".email-success-card");
const emailSuccessInfo = document.querySelector(".email-success-info");
const dismissButton = document.querySelector(".dismiss-button");  // Add this line

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let emailChecker = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailChecker.test(emailInput.value) || emailInput.value === "") {
    emailInput.classList.add("invalid");
    emailAdvice.classList.add("invalid");
  } else {
    emailCard.classList.add("inactive");
    emailSuccessCard.classList.remove("inactive");  // Remove "inactive" class to show the success card
    emailSuccessCard.classList.add("active");
    emailSuccessInfo.textContent = emailInput.value;
  }
});

dismissButton.addEventListener("click", () => {
  emailCard.classList.remove("inactive");  // Show the form again
  emailSuccessCard.classList.remove("active");  // Hide the success card
  emailSuccessCard.classList.add("inactive");
  emailInput.value = "";  // Clear the email input
  emailInput.classList.remove("invalid");
  emailAdvice.classList.remove("invalid");
});
