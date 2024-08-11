import { FilterComponent } from "./components/filtrer.js";
import { WorklistComponent } from "./components/worklist.js";
import { Work } from "./models/Work.js";
import { createWork, getCategories, getWorks, login } from "./services/sophiebluel.js";
import { amIsLoged, clearAddModal, handleLogOutClick, hideModals } from "./utils/functions.js";

const init = async () => {
    const works = await getWorks();
    const categories = await getCategories();

    if (works != undefined) {
        WorklistComponent(works);
    }

    if (categories != undefined) {
        FilterComponent(categories);
    }
    return works;
}

const works = await init();

amIsLoged();
handleLogOutClick();

if (works != undefined) {
    const radioButtons = document.querySelectorAll('.filter input');
    radioButtons.forEach((radioButton) => {
        radioButton.addEventListener("click", (event) => {
                const selectedValue = (event.target as HTMLInputElement).value;
                if (selectedValue === "0") {
                    WorklistComponent(works);
                } else {
                    const currentWork = works.filter((work: Work) => work.categoryId.toString() === selectedValue);
                    WorklistComponent(currentWork);
                }
        });
    });

}

const formAddPhoto = document.getElementById('formAddPhoto');
if (formAddPhoto) {
    formAddPhoto.addEventListener("submit", async (event) => {
        event.preventDefault();
        const newphotoDOM = document.getElementById("newphoto") as HTMLInputElement;
        const titleDOM = document.getElementById("title") as HTMLInputElement;
        const categorieDOM = document.getElementById("category-select") as HTMLInputElement;
        const newphotolabel = document.querySelector('.newphotolabel') as HTMLElement;
        const localToken = window.localStorage.getItem("token");
        if (newphotoDOM && titleDOM && categorieDOM && newphotolabel && localToken) {
            try {
                if (newphotoDOM.files) {
                    const file = newphotoDOM.files[0];
                    await createWork(localToken, file, titleDOM.value, parseInt(categorieDOM.value));
                    const works = await getWorks();
                    if (works !== undefined) {
                        WorklistComponent(works);
                        hideModals();
                        clearAddModal();
                    }
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("Form incorrect or empty");
        }
    });
}
