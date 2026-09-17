const button = document.querySelector("#change-message");
const message = document.querySelector("#instructions-text");

button.addEventListener("click", () => {
  message.textContent = "Hidden \u{1F984}";
  console.log("Message changed");
  alert("Welcome back!");
});
