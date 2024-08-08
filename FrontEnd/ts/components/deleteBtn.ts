import { deleteWork, getWorks } from "../services/sophiebluel.js";
import { WorklistComponent } from "./worklist.js";

export const deleteBtnComponent = () => {
    const deleteBtns = document.querySelectorAll('.deleteBtn');
    deleteBtns.forEach((deleteBtn) => {
        deleteBtn.addEventListener("click", async (event) => {
            const target = event.currentTarget as HTMLButtonElement;
            const value = target.value;
            const localToken = window.localStorage.getItem("token");
            if (localToken) {
                await deleteWork(localToken, value);
                const works = await getWorks();
                if (works != undefined) {
                    WorklistComponent(works);
                }
            }
        });
    });
}