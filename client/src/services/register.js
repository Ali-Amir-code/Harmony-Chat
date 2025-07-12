import axios from "axios";


export async function handleRegister(e, navigate) {
  e.preventDefault();
  const nameElement = document.getElementById("name");
  const usernameElement = document.getElementById("username");
  const emailElement = document.getElementById("email");
  const passwordElement = document.getElementById("password");
  const userInfoText = document.getElementById("userInfoText");

userInfoText.innerHTML = "";

  try {

    const res = await axios.post("/api/auth/register", {
      name: nameElement.value,
      username: usernameElement.value,
      email: emailElement.value,
      password: passwordElement.value,
    });
    if (res.data.success) {
      userInfoText.style.color = "green";
      localStorage.setItem("user", JSON.stringify({
        username: usernameElement.value,
        password: passwordElement.value,
      }));
      navigate("/");
    } else {
      userInfoText.style.color = "red";
    }
    userInfoText.innerHTML = res.data.message;
  } catch (e) {
    userInfoText.style.color = "red";
    userInfoText.innerHTML = "Connection Error";
  }
}

export function handleConfirmPasswordChange() {
  const passwordElement = document.getElementById("password");
  const confirmPasswordElement = document.getElementById('confirmPassword')
  const userInfoText = document.getElementById("userInfoText");
  userInfoText.innerHTML = "";
  if (confirmPasswordElement.value === '') return
  if (passwordElement.value !== confirmPasswordElement.value) {
    userInfoText.style.color = "red";
    userInfoText.innerHTML = "Passwords do not match";
  }
}
