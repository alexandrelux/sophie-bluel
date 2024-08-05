import { Category } from "./Category";

export type Work = {
    id: number
    title: string
    imageUrl: string
    categoryId: number
    userId: number
    category: Category
};

export type WorkAck = {
    id: number
    title: string
    imageUrl: string
    categoryId: number
    userId: number
};