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
    const modal = document.querySelector('.modalDeletePhoto') as HTMLElement;

    if (modifyBtn && modal) {
        modifyBtn.addEventListener("click", () => {
            modal.style.display='flex';
        });
    }

    const addphotobtn = document.querySelector('.addphotobtn') as HTMLElement;
    const modalAddPhoto = document.querySelector('.modalAddPhoto') as HTMLElement;
    const backbtn = document.querySelector('.backbtn') as HTMLElement;

    if (addphotobtn && modalAddPhoto) {
        addphotobtn.addEventListener("click", () => {
            modalAddPhoto.style.display='flex';
        });
    } 

    if (backbtn && modalAddPhoto) {
        backbtn.addEventListener("click", () => {
            modalAddPhoto.style.display='none';
        });
    } 

    const closebtns = document.querySelectorAll('.closebtn');
    closebtns.forEach((closebtn) => {
        closebtn.addEventListener("click", (event) => {
            modalAddPhoto.style.display='none';
            modal.style.display='none';
        });
    });


    const newphoto = document.getElementById('newphoto') as HTMLInputElement;
    const newphotolabel = document.querySelector('.newphotolabel') as HTMLElement;

    if (newphoto) {
        newphoto.addEventListener("change", (event) => {
            const target = event.target as HTMLInputElement;
            if (target && target.files && target.files[0]) {
                const file = target.files[0];
                const reader = new FileReader();
                reader.onload = function(e) {
                    newphotolabel.style.backgroundImage = `url('${e.target?.result}')`;
                }
                reader.readAsDataURL(file);
            }
        });
    }

}
