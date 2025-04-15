import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {  // эта надстройка говорит о том, что у нас есть зарегестрированный алеас, который называется @/
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,  // и он будет автоматически резолвить этот путь по пути src
    },                                             // __dirname - обращение к текущей папке проекта
  },
})
