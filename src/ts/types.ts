export type AuthorFilter = {
    name?: string;
    page: number; 
}

export type AuhtorFilterAction =
  | { type: 'SET_FILTER'; payload: AuthorFilter }
  | { type: 'RESET_FILTER'; payload: AuthorFilter }

export type Author = {
  id?: number | null;
  name: string
}

export type AuthorState = {
  data: Author[];
  totalPage: number;
}

export type AuthorAction =
  | { type: 'SET_AUTHOR'; payload: { rows: Author[], count: number}}
  | { type: 'ADD_AUTHOR'; payload: Author }
  | { type: 'UPDATE_AUTHOR'; payload: Author }
  | { type: 'REMOVE_AUTHOR'; payload: Author }
