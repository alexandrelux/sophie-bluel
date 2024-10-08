export const amIsLoged = () => {
    const loginDOM = document.querySelector('.login')  as HTMLElement;
    const logoutDOM = document.querySelector('.logout') as HTMLElement;
    const filtersDOM = document.querySelector('.filters') as HTMLElement;
    const modifyBtnDOM = document.querySelector('.modify-btn') as HTMLElement;
    const topbar = document.querySelector('.topbar') as HTMLElement;
    const header = document.querySelector('header') as HTMLElement;


    const localToken = window.localStorage.getItem("token");
    if (localToken) {
        if (loginDOM && logoutDOM) {
            loginDOM.style.display='none';
            logoutDOM.style.display='inline';
        }
        if (filtersDOM) {
            filtersDOM.style.display='none';
        }
        if (modifyBtnDOM) {
            modifyBtnDOM.style.display='block';
        }
        if (topbar && header) {
            topbar.style.display='flex';
            header.style.paddingTop='59px';
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
            modifyBtnDOM.style.display='none';
        }
        if (topbar && header) {
            topbar.style.display='none';
            header.style.paddingTop='0px';
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
    const newphotolabelInfoList = document.querySelectorAll('.newphotolabelInfo') as NodeListOf<HTMLElement>;
    const newphotolabelPreview = document.querySelector('.newphotolabelPreview') as HTMLElement;
    if (newphoto) {
        newphoto.addEventListener("change", (event) => {
            const target = event.target as HTMLInputElement;
            if (target && target.files && target.files[0]) {
                const file = target.files[0];
                const reader = new FileReader();
                reader.onload = function(e) {
                    newphotolabelInfoList.forEach((newphotolabelInfo) => {
                        newphotolabelInfo.style.display='none';
                    });
                    newphotolabelPreview.style.backgroundImage = `url('${e.target?.result}')`;
                    newphotolabelPreview.style.display='block';
                }
                reader.readAsDataURL(file);
            }
        });
    }

    const formAddPhoto = document.getElementById('formAddPhoto');
    const btnAddPhoto = document.getElementById('btnAddPhoto') as HTMLInputElement;
    if (formAddPhoto && btnAddPhoto) {
        formAddPhoto.addEventListener("change", () => {
            const formIsValid = checkFormInputs(formAddPhoto);
            btnAddPhoto.disabled = !formIsValid;
        });
    }
}

const checkFormInputs = (form: HTMLElement): boolean => {
    const inputs = form.querySelectorAll('input, select');
    let isValid = true;

    inputs.forEach(input => {
        if (input instanceof HTMLInputElement) {
            if (input.type === 'file') {
                if (!input.files || input.files.length === 0) {
                    isValid = false;
                }
            } else {
                if (input.value.trim() === '') {
                    isValid = false;
                }
            }
        } else if (input instanceof HTMLSelectElement) {
            if (input.value.trim() === '') {
                isValid = false;
            }
        }
    });

    return isValid;
}

export const hideModals = () => {
    const modal = document.querySelector('.modalDeletePhoto') as HTMLElement;
    const modalAddPhoto = document.querySelector('.modalAddPhoto') as HTMLElement;
    if (modal && modalAddPhoto) {
        modalAddPhoto.style.display='none';
        modal.style.display='none';
    }
}

export const clearAddModal = () => {
    const newphotoDOM = document.getElementById("newphoto") as HTMLInputElement;
    const titleDOM = document.getElementById("title") as HTMLInputElement;
    const categorieDOM = document.getElementById("category-select") as HTMLInputElement;
    const newphotolabel = document.querySelector('.newphotolabel') as HTMLElement;
    const btnAddPhoto = document.getElementById('btnAddPhoto') as HTMLInputElement;
    const newphotolabelInfoList = document.querySelectorAll('.newphotolabelInfo') as NodeListOf<HTMLElement>;
    const newphotolabelPreview = document.querySelector('.newphotolabelPreview') as HTMLElement;

    if (newphotoDOM && titleDOM && categorieDOM) {
        newphotoDOM.value = "";
        titleDOM.value="";
        categorieDOM.value="";
        btnAddPhoto.disabled = true;
    }

    if (newphotolabel && newphotolabelInfoList && newphotolabelPreview) {
        newphotolabelInfoList.forEach((newphotolabelInfo) => {
            newphotolabelInfo.style.display='block';
        });
        newphotolabelPreview.style.display='none';
        newphotolabelPreview.style.backgroundImage = `url('')`;
    }
}