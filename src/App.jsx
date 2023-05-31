import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layouts/mainLayout/MainLayout';
import ListaFuncionarios from './pages/funcionarios/ListaFuncionarios';
import DetalheFuncionarios from './pages/funcionarios/DetalheFuncionarios';
import FormularioFuncionarios from './pages/funcionarios/FormularioFuncionarios';

import DetalheDescontos from './pages/descontos/DetalheDescontos';
import ListaDescontos from './pages/descontos/ListaDescontos';
import FormularioDescontos from './pages/descontos/FormularioDescontos';

import ListaMercadorias from './pages/mercadorias/ListaMercadorias';
import DetalheMercadorias from './pages/mercadorias/DetalheMercadorias';
import FormularioMercadorias from './pages/mercadorias/FormularioMercadorias';

import ListaFornecedores from './pages/fornecedores/ListaFornecedores';
import DetalheFornecedores from './pages/fornecedores/DetalheFornecedores';
import FormularioFornecedores from './pages/fornecedores/FormularioFornecedores';

function App() {

   return (
      <BrowserRouter basename='/pharmacy-system-frontend'>
         <Routes>
            <Route path='/' element={<MainLayout />} />
            <Route path='/funcionarios/' element={<MainLayout children={<ListaFuncionarios />} />} />
            <Route path='/funcionarios/:id' element={<MainLayout children={<DetalheFuncionarios />} />} />
            <Route path='/funcionarios/form/:id' element={<MainLayout children={<FormularioFuncionarios />} />} />

            <Route path='/descontos/' element={<MainLayout children={<ListaDescontos />} />} />
            <Route path='/descontos/:id' element={<MainLayout children={<DetalheDescontos />} />} />
            <Route path='/descontos/form/:id' element={<MainLayout children={<FormularioDescontos />} />} />

            <Route path='/mercadorias/' element={<MainLayout children={<ListaMercadorias/>}/>}/>
            <Route path='/mercadorias/:id' element={<MainLayout children={<DetalheMercadorias/>}/>}/>
            <Route path='/mercadorias/form/:id' element={<MainLayout children={<FormularioMercadorias/>}/>}/>

            <Route path='/fornecedores/' element={<MainLayout children={<ListaFornecedores/>}/>}/>
            <Route path='/fornecedores/:id' element={<MainLayout children={<DetalheFornecedores/>}/>}/>
            <Route path='/fornecedores/form/:id' element={<MainLayout children={<FormularioFornecedores/>}/>}/>
         </Routes>
      </BrowserRouter>
   )
}

export default App