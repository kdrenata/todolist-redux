
import type {FilterValues, Todolist} from '../app/App.tsx'
import {createAction, createReducer, nanoid} from "@reduxjs/toolkit";

export const deleteTodolistAC = createAction<{ id: string }>('todolists/deleteTodolist')
export const changeTodolistTitleAC = createAction<{id: string, title: string}>('todolists/changeTodolistTitle')
export const changeTodolistFilterAC = createAction<{id: string, filter: FilterValues}>('todolists/changeTodolistFilter')
                                     //присваиваем результат вызова функции createAction и в () передаем название action(а)

export const createTodolistAC = createAction('todolists/createTodolist', (title: string) => {
  return {payload: {title, id: nanoid() }}
})  // вторым параметром будет ф callback которая будет подготавливать наш payload определенным образом
    // он обязательно должен вернуть объект у которого есть свойство payload

const initialState: Todolist[] = []

export const todolistsReducer = createReducer(initialState, builder => {
  builder
      .addCase(deleteTodolistAC, (state, action) => {   // ф callback явл редьюсером который принимает state и action и какой-то кейс обраб отдельно внутри себя
        const index = state.findIndex(todolist => todolist.id === action.payload.id)
        if (index !== -1) {
          state.splice(index, 1)
        }
      })
      .addCase(createTodolistAC, (state, action) => {  // state и action здесь уже протипизированы
        state.push({...action.payload, filter: 'all'})
      })
      .addCase(changeTodolistTitleAC, (state, action) => {
        const todolist = state.find(todolist => todolist.id === action.payload.id)
        if (todolist) {
          todolist.title = action.payload.title  //напрямую обращаемся к title todolist(а). = теперь ты будешь title, который в payload(е)
        }
      })
      .addCase(changeTodolistFilterAC, (state, action) => {
        const index = state.findIndex(todolist => todolist.id === action.payload.id)
        if (index !== -1) {
          state[index].filter = action.payload.filter // мы нашли индекс нужного тудулиста, но не сам тудулист, для того чтобы добраться до тудулиста нам нужно обратиться к массиву по индексу найденному
        }
      })
})

export type DeleteTodolistAction = ReturnType<typeof deleteTodolistAC>
export type CreateTodolistAction = ReturnType<typeof createTodolistAC>
