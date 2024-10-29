import { AuthorFilter, AuhtorFilterAction, AuthorAction, AuthorState } from "@/ts/types"

export const initFilter: AuthorFilter = {
    page: 1
}

export const filterReducer = (state: AuthorFilter, action: AuhtorFilterAction) =>{
    const { type, payload } = action

    switch(type){
        case 'SET_FILTER':
            return { ...state, ...payload}
        case 'RESET_FILTER':
            return { ...initFilter }
        default:
            return state
    }
} 

export const initAuthors = {
    data: [],
    totalPage: 0
}

export const authorReducer = (state: AuthorState, action: AuthorAction) => {
    const { type, payload } = action
    
    switch(type){
        case 'SET_AUTHOR':
            return { 
                data: payload.rows,
                totalPage: payload.count
            }
        case 'ADD_AUTHOR':
            return {
                ...state,
                data: [payload, ...state.data]
            }
        case 'UPDATE_AUTHOR':{
            const updatedData = [...state.data]
            const rowIndex = updatedData.findIndex(r=>r.id === payload.id)
            let row = updatedData[rowIndex]
            row = { ...row, ...payload }
            updatedData[rowIndex] = row
            return {
                ...state,
                data: updatedData
            }
        }
        case 'REMOVE_AUTHOR': {
            // const rowIndex = state.data.findIndex(r=>r.id === payload.id)
            // delete state.data[rowIndex]
            const updatedData = state.data.filter(r => r.id !== payload.id)

            return { ...state, data: updatedData }
        }
        default:
            return state
    }
}