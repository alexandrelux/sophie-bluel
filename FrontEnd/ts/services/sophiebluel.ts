// https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch

import { Category } from "../models/Category.js";
import { User, UserAck } from "../models/User.js";
import { Work, WorkAck } from "../models/Work.js";
import { API_URL, tockendur } from "../utils/const.js";

// CREATE
export const login = async (user: User):Promise<UserAck | undefined> => {
    try {
        const response = await fetch(API_URL+"/users/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });

        const responseData = await response.json();
        console.log(responseData);
        return responseData as UserAck;
    } catch (error) {
        console.log("error");
        return undefined;
    } finally {
        console.log("finally");
    }
} 

export const createWork = async (token: string, image: string, title:string, category:number):Promise<WorkAck | undefined> => {
    try {
        const response = await fetch(API_URL+"/works", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": 'Bearer '+token,
            },
            body: JSON.stringify({
                image: image,
                title: title,
                category: category
            }),
          });
        console.log(response.status);
        const responseData = await response.json();
        console.log(responseData);
        return responseData as WorkAck;
    } catch (error) {
        console.log("error");
        return undefined;
    } finally {
        console.log("finally");
    }
} 

// READ
export const getWorks = async ():Promise<Array<Work> | undefined> => {
    try {
        const response = await fetch(API_URL+"/works");
        const responseData = await response.json();
        console.log(responseData);
        return responseData as Array<Work>;
    } catch (error) {
        console.log("error");
        return undefined;
    } finally {
        console.log("finally");
    }
}

export const getCategories = async ():Promise<Array<Category> | undefined> => {
    try {
        const response = await fetch(API_URL+"/categories");
        const responseData = await response.json();
        console.log(responseData);
        return responseData as Array<Category>;
    } catch (error) {
        console.log("error");
        return undefined;
    } finally {
        console.log("finally");
    }
}

// UPDATE 

// DELETE
export const deleteWork = async (token: string, id:number) => {
    try {
        const response = await fetch(API_URL+"/works/"+id, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Authorization": 'Bearer ' + token,
            }
          });
        console.log(response.status);
    } catch (error) {
        console.log("error");
    } finally {
        console.log("finally");
    }
} 