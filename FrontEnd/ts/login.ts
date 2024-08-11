import { login } from "./services/sophiebluel.js";
import { amIsLoged, handleLogOutClick } from "./utils/functions.js";

amIsLoged();
handleLogOutClick();

const form = document.querySelector('form');
if (form) {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const emailDOM = document.getElementById("email") as HTMLInputElement;
        const passwordDOM = document.getElementById("password") as HTMLInputElement;
        const notifDOM = document.querySelector('.notif') as HTMLElement;
        if (emailDOM && passwordDOM) {
            const userAck = await login({email: emailDOM.value, password: passwordDOM.value});
            if (notifDOM && !userAck?.userId) {
                notifDOM.style.display='block';
                setTimeout(function(){
                    notifDOM.style.display='none';
                }, 3000)   
            }
            if (userAck?.token) {
                window.localStorage.setItem("token", userAck?.token);
                window.location.href = '/';
            }

        } else {
            console.log("Login incorrect or empty");
        }
    });
}

