const form = document.getElementById("login-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (username === "" || password === "") {
    errorMessage.textContent = "Please fill in both fields";
  } else if (username === "Rolivhuwa" && password === "Roli") {
    // Successful login logic here
    alert("Well come to my login-form!");
  } else {
    errorMessage.textContent = "Invalid username or password";
  }
});

 
