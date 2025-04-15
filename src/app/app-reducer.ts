import {createAction, createReducer} from "@reduxjs/toolkit";


export const changeThemeModeAC = createAction<{themeMode: ThemeMode}>('app/changeThemeMode')


const initialState = {
    themeMode: "light" as ThemeMode, // с таким типом как ThemeMode
    // error: null as string | null // как типизация дополнительно добавляется
}

export const appReducer = createReducer(initialState, builder => {
  builder
      .addCase(changeThemeModeAC, (state, action) => {
          state.themeMode = action.payload.themeMode // AC при создании объекта будет автоматически передавать все свои свойства в payload
      })
})
export type ThemeMode = 'dark' | 'light'