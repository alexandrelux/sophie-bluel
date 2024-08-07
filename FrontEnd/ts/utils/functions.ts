export const amIsLoged = () => {
    const loginDOM = document.querySelector('.login')  as HTMLElement;
    const logoutDOM = document.querySelector('.logout') as HTMLElement;

    if (loginDOM && logoutDOM) {
        const localToken = window.localStorage.getItem("token");
        if (localToken) {
            loginDOM.style.display='none';
            logoutDOM.style.display='inline';
        } else {
            loginDOM.style.display='inline';
            logoutDOM.style.display='none';
        }
    }
}

export const handleLogOutClick = () => {
    const logoutDOM = document.querySelector('.logout') as HTMLElement;
    if (logoutDOM) {
        logoutDOM.addEventListener("click", () => {
            window.localStorage.removeItem("token")
            amIsLoged();
        });
    }
}

