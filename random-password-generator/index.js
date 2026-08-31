const btnEl = document.querySelector(".btn");
const inputEl = document.querySelector("#input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
  createPassword();
});

copyIconEl.addEventListener("click", async () => {
  await copyPassword();

  if (inputEl.value) {
    alertContainerEl.textContent = inputEl.value + " copied!";

    alertContainerEl.classList.remove("active");
    setTimeout(() => {
      alertContainerEl.classList.add("active");
    }, 2000);
  }
});

function createPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  let password = "";

  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }

  inputEl.value = password;
}

async function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 999);
  await navigator.clipboard.writeText(inputEl.value);
}
