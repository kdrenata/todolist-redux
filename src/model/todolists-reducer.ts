
import type {FilterValues, Todolist} from '../app/App.tsx'
import {createAction, nanoid} from "@reduxjs/toolkit";



export const deleteTodolistAC = createAction<{ id: string }>('todolists/deleteTodolist')
export const changeTodolistTitleAC = createAction<{id: string, title: string}>('todolists/changeTodolistTitle')
export const changeTodolistFilterAC = createAction<{id: string, filter: FilterValues}>('todolists/changeTodolistFilter')

export const createTodolistAC = createAction('todolists/createTodolist', (title: string) => {
  return {payload: {title, id: nanoid() }}
})


const initialState: Todolist[] = []

export const todolistsReducer = (state: Todolist[] = initialState, action: Actions): Todolist[] => {
  switch (action.type) {
    case 'delete_todolist': {
      return state.filter(todolist => todolist.id !== action.payload.id)
    }
    case 'create_todolist': {
      const newTodolist: Todolist = {id: action.payload.id, title: action.payload.title, filter: 'all'}
      return [...state, newTodolist]
    }
    case 'change_todolist_title': {
      return state.map(todolist => todolist.id === action.payload.id ? {...todolist, title: action.payload.title} : todolist)
    }
    case 'change_todolist_filter': {
      return state.map(todolist => todolist.id === action.payload.id ? {...todolist, filter: action.payload.filter} : todolist)
    }
    default:
      return state
  }
}


export type DeleteTodolistAction = ReturnType<typeof deleteTodolistAC>
export type CreateTodolistAction = ReturnType<typeof createTodolistAC>
export type ChangeTodolistTitleAction = ReturnType<typeof changeTodolistTitleAC>
export type ChangeTodolistFilterAction = ReturnType<typeof changeTodolistFilterAC>

type Actions =
    | DeleteTodolistAction
    | CreateTodolistAction
    | ChangeTodolistTitleAction
    | ChangeTodolistFilterAction






//
// export const deleteTodolistAC2 = (id: string) => {
//   return {type: 'delete_todolist', payload: { id }} as const
// }
//
// export const createTodolistAC2 = (title: string) => {
//   return {type: 'create_todolist', payload: { title, id: v1() }} as const
// }
//
// export const changeTodolistTitleAC2 = (payload: {id: string, title: string}) => {
//   return {type: 'change_todolist_title', payload} as const
// }
//
// export const changeTodolistFilterAC2 = (payload: {id: string, filter: FilterValues}) => {
//   return {type: 'change_todolist_filter', payload} as const
// }