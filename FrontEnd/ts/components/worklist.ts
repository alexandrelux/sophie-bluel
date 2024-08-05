import { getWorks } from "../services/sophiebluel.js";

export const WorklistComponent = async () => {
    const worklist = await getWorks();

    if (worklist != undefined) {
        const worklistDom = worklist.map(
            (currentWork) =>  (
                "<figure><img src="+currentWork.imageUrl+" alt="+currentWork.title+"><figcaption>"+currentWork.title+"</figcaption></figure>" )
        ).join('');
  
        const gallery = document.querySelector('.gallery');
        if (gallery) {
            gallery.innerHTML = worklistDom;
        }
    }
}

