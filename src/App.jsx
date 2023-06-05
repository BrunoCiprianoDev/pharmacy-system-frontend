import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

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

import ListaLotes from './pages/lotes/ListaLotes';
import DetalheLotes from './pages/lotes/DetalheLotes';
import FormularioLotes from './pages/lotes/FormularioLotes';

import ListaCompras from './pages/compras/ListaCompras';
import DetalheCompras from './pages/compras/detalheCompras/DetalheCompras';
import FormularioCompras from './pages/compras/FormularioCompras';

import ListaPerdas from './pages/perdas/ListaPerdas';
import DetalhePerdas from './pages/perdas/DetalhePerdas';
import FormularioPerdas from './pages/perdas/FormularioPerdas';

import ListaDevolucoes from './pages/devolucoes/ListaDevolucoes';
import DetalheDevolucoes from './pages/devolucoes/DetalheDevolucoes';
import FormularioDevolucoes from './pages/devolucoes/FormularioDevolucoes';

import ListaClientes from './pages/clientes/ListaClientes';
import DetalheClientes from './pages/clientes/DetalheClientes';
import FormularioClientes from './pages/clientes/FormularioClientes';

import Pagina404 from './pages/pagina404/Pagina404';
import NovaVenda from './pages/vendas/novaVenda/NovaVenda';
import ListaVenda from './pages/vendas/ListaVenda';
import DetalheVenda from './pages/vendas/detalheVenda/DetalheVenda';
import Login from './pages/login/Login';
import { useContext} from 'react';
import { AuthContext } from './context/AuthContext';

function App() {

   const {auth} = useContext(AuthContext);

   return (
      <BrowserRouter basename='/pharmacy-system-frontend'>
         <Routes>
            <Route path='/' element={auth ? <Navigate to="/vendas"/>:<Login />} />
            <Route path='/funcionarios/' element={auth ? <MainLayout children={<ListaFuncionarios />} /> : <Navigate to="/" />} />
            <Route path='/funcionarios/:id' element={auth? <MainLayout children={<DetalheFuncionarios />} /> : <Navigate to="/"/>} />
            <Route path='/funcionarios/form/:id' element={auth? <MainLayout children={<FormularioFuncionarios />} /> : <Navigate to="/"/>} />

            <Route path='/descontos/' element={auth? <MainLayout children={<ListaDescontos />} /> : <Navigate to="/"/>} />
            <Route path='/descontos/:id' element={auth? <MainLayout children={<DetalheDescontos />} /> : <Navigate to="/"/>} />
            <Route path='/descontos/form/:id' element={auth? <MainLayout children={<FormularioDescontos />} /> : <Navigate to="/"/>} />

            <Route path='/mercadorias/' element={auth? <MainLayout children={<ListaMercadorias />} /> : <Navigate to="/"/>} />
            <Route path='/mercadorias/:id' element={auth? <MainLayout children={<DetalheMercadorias />} /> : <Navigate to="/"/>} />
            <Route path='/mercadorias/form/:id' element={auth? <MainLayout children={<FormularioMercadorias />} /> : <Navigate to="/"/>} />

            <Route path='/fornecedores/' element={auth? <MainLayout children={<ListaFornecedores />} /> : <Navigate to="/"/>} />
            <Route path='/fornecedores/:id' element={auth? <MainLayout children={<DetalheFornecedores />} /> : <Navigate to="/"/>} />
            <Route path='/fornecedores/form/:id' element={auth? <MainLayout children={<FormularioFornecedores />} /> : <Navigate to="/"/>} />

            <Route path='/compras/' element={auth? <MainLayout children={<ListaCompras />} /> : <Navigate to="/"/>} />
            <Route path='/compras/:id' element={auth? <MainLayout children={<DetalheCompras />} /> : <Navigate to="/"/>} />
            <Route path='/compras/form/:id' element={auth? <MainLayout children={<FormularioCompras />} /> : <Navigate to="/"/>} />

            <Route path='/lotes/' element={auth? <MainLayout children={<ListaLotes />} /> : <Navigate to="/"/>} />
            <Route path='/lotes/:id' element={auth? <MainLayout children={<DetalheLotes />} /> : <Navigate to="/"/>} />
            <Route path='/lotes/form/:id' element={auth? <MainLayout children={<FormularioLotes />} /> : <Navigate to="/"/>} />

            <Route path='/perdas/' element={auth? <MainLayout children={<ListaPerdas />} /> : <Navigate to="/"/>} />
            <Route path='/perdas/:id' element={auth? <MainLayout children={<DetalhePerdas />} /> : <Navigate to="/"/>} />
            <Route path='/perdas/form/:id' element={auth? <MainLayout children={<FormularioPerdas />} /> : <Navigate to="/"/>} />

            <Route path='/devolucoes/' element={auth? <MainLayout children={<ListaDevolucoes />} /> : <Navigate to="/"/>} />
            <Route path='/devolucoes/:id' element={auth? <MainLayout children={<DetalheDevolucoes />} /> : <Navigate to="/"/>} />
            <Route path='/devolucoes/form/:id' element={auth? <MainLayout children={<FormularioDevolucoes />} /> : <Navigate to="/"/>} />

            <Route path='/clientes/' element={auth? <MainLayout children={<ListaClientes />} /> : <Navigate to="/"/>} />
            <Route path='/clientes/:id' element={auth? <MainLayout children={<DetalheClientes />} /> : <Navigate to="/"/>} />
            <Route path='/clientes/form/:id' element={auth? <MainLayout children={<FormularioClientes />} /> : <Navigate to="/"/>} />

            <Route path='/novaVenda/' element={auth? <MainLayout children={<NovaVenda />} /> : <Navigate to="/"/>} />
            <Route path='/vendas/' element={auth? <MainLayout children={<ListaVenda />} /> : <Navigate to="/"/>} />
            <Route path='/vendas/:id' element={auth? <MainLayout children={<DetalheVenda />} /> : <Navigate to="/"/>} />

            <Route path='*' element={<Pagina404 />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App