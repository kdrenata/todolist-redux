import {createTheme} from "@mui/material/styles";
import type {ThemeMode} from "@/app/app-reducer.ts";

// функция которая внутри себя создает тему на основании каких-то параметров
// и возвращает эту тему( она не возвращает функцию и не принимает функцию)
export const getTheme = (themeMode: ThemeMode) => {
    return createTheme({
        palette: {
            mode: themeMode,
            primary: {
                main: '#087EA4',
            },
        },
    })
}
