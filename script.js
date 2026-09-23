let username = document.getElementById("username");
let password = document.getElementById("password");
let checkbox = document.getElementById("checkbox");
const submit = document.getElementById("submit");
let existing = document.getElementById("existing");


let savedUsername = localStorage.getItem("username");

if (savedUsername) {
  existing.style.display = "block";
}


submit.addEventListener("click", () => {

  if (!username.value || !password.value) {
    alert("Please enter username and password");
    return;
  }

  if (checkbox.checked) {
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);

    existing.style.display = "block";
  }else{
    localStorage.clear();
  }

  alert(`Logged in as ${username.value}`);
});


existing.addEventListener("click", () => {
  let savedUsername = localStorage.getItem("username");

  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  }
});