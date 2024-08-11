import { Category } from "../models/Category.js";

export const FilterComponent = (categories : Category[]) => {
    if (categories != undefined) {
        // Filter
        const categoriesDom1stItem = "<div class='filter'><input type='radio' id='0' name='PhotoFilter' value='0' checked/><label for='0'>Tous</label></div>"
        const categoriesDomOtherItem= categories.map(
            (currentCategory) =>  (
                `<div class='filter'><input type='radio' id='${currentCategory.id}' name='PhotoFilter' value='${currentCategory.id}'/><label for='${currentCategory.id}'>${currentCategory.name}</label></div>`
            )
        );
        const categoriesDom = [...categoriesDom1stItem, ...categoriesDomOtherItem].join('');
  
        const targetedDom = document.querySelector('.filters');
        if (targetedDom) {
            targetedDom.innerHTML = "";
            targetedDom.innerHTML = categoriesDom;
        }

        // Category Select
        const categoriesSelectDom1stItem = "<option value=''></option>";
        const categoriesSelectDomOtherItem= categories.map(
            (currentCategory) =>  (
                `<option value='${currentCategory.id}'>${currentCategory.name}</option>`
            )
        );
        const categoriesSelectDom = [...categoriesSelectDom1stItem, ...categoriesSelectDomOtherItem].join('');
  
        const targetedSelectDom = document.getElementById('category-select');
        if (targetedSelectDom) {
            targetedSelectDom.innerHTML = "";
            targetedSelectDom.innerHTML = categoriesSelectDom;
        }
    }
}

