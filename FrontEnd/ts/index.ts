import { deleteBtnComponent } from "./components/deleteBtn.js";
import { FilterComponent } from "./components/filtrer.js";
import { WorklistComponent } from "./components/worklist.js";
import { User } from "./models/User.js";
import { Work } from "./models/Work.js";
import { createWork, deleteWork, getCategories, getWorks, login } from "./services/sophiebluel.js";
import { imagendur } from "./utils/const.js";
import { amIsLoged, handleLogOutClick } from "./utils/functions.js";

// Create
const testCreate = async () => {
    const userEnDur: User = {
        email: 'sophie.bluel@test.tld',
        password: 'S0phie'
      };
    const currentUser = await login(userEnDur);
    if (currentUser?.token) {
        console.log(currentUser?.token);
        createWork(currentUser.token, imagendur, "toto", 3);
    }
}
// testCreate();

// Read
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
