import { Category } from "./enums";
import { Author } from "./types";

export interface EventParams{
    preventDefault: () => void
}

export interface AuthorInterface{
    id: number;
    name: string;
}

export interface BookInterface{
    id: number;
    title: string;
    description: string;
    category: Category;
    publishedYear: number;
}

export interface CTableProps {
    data: Author[],
    onEdit: (row: AuthorInterface | BookInterface)=> void; 
    onDelete: (row: AuthorInterface | BookInterface)=> void; 
}