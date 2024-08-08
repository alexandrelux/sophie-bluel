import { Work } from "../models/Work.js";
import { deleteBtnComponent } from "./deleteBtn.js";

export const WorklistComponent = (worklist : Work[]) => {
    if (worklist != undefined) {
        const worklistDom = worklist.map(
            (currentWork) =>  (
            // template string
            `<figure><img src='${currentWork.imageUrl}' alt='${currentWork.title}'><figcaption>${currentWork.title}</figcaption></figure>`)
        ).join('');
  
        const gallery = document.querySelector('.gallery');
        if (gallery) {
            gallery.innerHTML = "";
            gallery.innerHTML = worklistDom;
        }

        const photolistDom = worklist.map(
            (currentWork) =>  (
            // template string
            `
                <div class="photo">
                    <button class="deleteBtn" value='${currentWork.id}'><i class="fa-solid fa-trash-can"></i></button>
                    <img src='${currentWork.imageUrl}' alt='${currentWork.title}'>
                </div>
            `)
        ).join('');
  
        const photoDom = document.querySelector('.photos');
        if (photoDom) {
            photoDom.innerHTML = "";
            photoDom.innerHTML = photolistDom;
        }

        deleteBtnComponent();
    }
}


