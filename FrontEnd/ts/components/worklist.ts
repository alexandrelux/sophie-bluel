import { Work } from "../models/Work.js";

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
    }
}

