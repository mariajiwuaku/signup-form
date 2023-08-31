const emailCard = document.querySelector(".email-card");
const emailAdvice = document.querySelector(".span-advice");
const emailInput = document.querySelector(".email-input");

const emailSuccessCard = document.querySelector(".email-success-card");
const emailSuccessInfo = document.querySelector(".email-success-info");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault(e);
  let emailChecker = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailChecker.test(emailInput.value) || emailInput.value === null) {
    emailInput.classList.add("invalid");
    emailAdvice.classList.add("invalid");
  } else {
    emailCard.classList.add("inactive");
    emailSuccessCard.classList.add("active");
    emailSuccessInfo.textContent = emailInput.value;
  }
});