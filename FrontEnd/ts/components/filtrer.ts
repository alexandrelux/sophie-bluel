import { Category } from "../models/Category.js";

export const FilterComponent = (categories : Category[]) => {
    if (categories != undefined) {
        const categoriesDom1stItem = "<div class='filter'><input type='radio' id='0' name='PhotoFilter' value='0' checked/><label for='0'>Tous</label></div>"
        const categoriesDomOtherItem= categories.map(
            (currentWork) =>  (
                `<div class='filter'><input type='radio' id='${currentWork.id}' name='PhotoFilter' value='${currentWork.id}'/><label for='${currentWork.id}'>${currentWork.name}</label></div>`
            )
        );
        const categoriesDom = [...categoriesDom1stItem, ...categoriesDomOtherItem].join('');
  
        const targetedDom = document.querySelector('.filters');
        if (targetedDom) {
            targetedDom.innerHTML = "";
            targetedDom.innerHTML = categoriesDom;
        }
    }
}

