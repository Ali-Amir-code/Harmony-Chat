import axios from "axios";

export async function handleLogin(e, navigate) {
    e.preventDefault();
    const userInfoText = document.getElementById('userInfoText');
    const usernameElement = document.getElementById("username");
    const passwordElement = document.getElementById("password");
    userInfoText.innerHTML = '';
    let user = {
        username: usernameElement.value,
        password: passwordElement.value,
    };
    try {
        const res = await axios.post("/api/auth/login", user);
        if (res.data.success) {
            userInfoText.style.color = "green";
            userInfoText.innerHTML = "Login successful";
            localStorage.setItem('user', JSON.stringify(user));
            navigate("/");
        }else{
            userInfoText.style.color = "red";
            userInfoText.innerHTML = "Invalid username or password";
            passwordElement.value = '';
            passwordElement.focus();
        }
    } catch (e) {
        userInfoText.style.color = "red";
        userInfoText.innerHTML = "Connection Error";

    }
}
