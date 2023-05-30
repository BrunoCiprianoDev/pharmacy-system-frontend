import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layouts/mainLayout/MainLayout';
import ListaFuncionarios from './pages/funcionarios/ListaFuncionarios';
import DetalheFuncionarios from './pages/funcionarios/DetalheFuncionarios';
import FormularioFuncionarios from './pages/funcionarios/FormularioFuncionarios';

function App() {

   return (
      <BrowserRouter basename='/pharmacy-system-frontend'>
         <Routes>
            <Route path='/' element={<MainLayout />} />
            <Route path='/funcionarios/' element={<MainLayout children={<ListaFuncionarios />} />} />
            <Route path='/funcionarios/:id' element={<MainLayout children={<DetalheFuncionarios />} />} />
            <Route path='/funcionarios/form/:id' element={<MainLayout children={<FormularioFuncionarios />} />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App