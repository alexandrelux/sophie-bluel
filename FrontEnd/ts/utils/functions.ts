import { deleteWork } from "../services/sophiebluel.js";

export const amIsLoged = () => {
    const loginDOM = document.querySelector('.login')  as HTMLElement;
    const logoutDOM = document.querySelector('.logout') as HTMLElement;
    const filtersDOM = document.querySelector('.filters') as HTMLElement;
    const modifyBtnDOM = document.querySelector('.modify-btn') as HTMLElement;

    const localToken = window.localStorage.getItem("token");
    if (localToken) {
        if (loginDOM && logoutDOM) {
            loginDOM.style.display='none';
            logoutDOM.style.display='inline';
        }
        if (filtersDOM) {
            filtersDOM.style.display='none';;
        }
        if (modifyBtnDOM) {
            modifyBtnDOM.style.display='block';;
        }
    } else {
        if (loginDOM && logoutDOM) {
            loginDOM.style.display='inline';
            logoutDOM.style.display='none';
        }
        if (filtersDOM) {
            filtersDOM.style.display='flex';
        }
        if (modifyBtnDOM) {
            modifyBtnDOM.style.display='none';;
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

    const modifyBtn = document.querySelector('.modify-btn') as HTMLElement;
    const modal = document.querySelector('.modal') as HTMLElement;
    const closebtn = document.querySelector('.closebtn') as HTMLElement;

    if (modifyBtn && modal) {
        modifyBtn.addEventListener("click", () => {
            modal.style.display='flex';
        });
    } 

    if (closebtn && modal) {
        closebtn.addEventListener("click", () => {
            modal.style.display='none';
        });
    } 
}
