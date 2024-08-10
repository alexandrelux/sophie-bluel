// https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch

import { Category } from "../models/Category.js";
import { User, UserAck } from "../models/User.js";
import { Work, WorkAck } from "../models/Work.js";
import { API_URL } from "../utils/const.js";

// CREATE
export const login = async (user: User) => {
    try {
        const response = await fetch(API_URL+"/users/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });

        const responseData = await response.json();
        return responseData as UserAck;
    } catch (error) {
        console.log("error");
        return undefined;
    }
} 

export const createWork = async (token: string, image: File, title: string, category: number) => {
    try {
        const formData = new FormData();
        formData.append("image", image); // Image file
        formData.append("title", title);
        formData.append("category", category.toString());

        const response = await fetch(API_URL + "/works", {
            method: "POST",
            headers: {
              "Authorization": 'Bearer ' + token,
            },
            body: formData,
        });

        const responseData = await response.json();
        return responseData as WorkAck;
    } catch (error) {
        console.log("error");
        return undefined;
    }
};


// READ
export const getWorks = async () => {
    try {
        const response = await fetch(API_URL+"/works");
        const responseData = await response.json();
        return responseData as Work[];
    } catch (error) {
        console.log("error");
        return undefined;
    }
}

export const getCategories = async () => {
    try {
        const response = await fetch(API_URL+"/categories");
        const responseData = await response.json();
        return responseData as Category[];
    } catch (error) {
        console.log("error");
        return undefined;
    }
}

// DELETE
export const deleteWork = async (token: string, id:string) => {
    try {
        const response = await fetch(API_URL+"/works/"+id, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Authorization": 'Bearer ' + token,
            }
          });
    } catch (error) {
        console.log("error");
    }
} 