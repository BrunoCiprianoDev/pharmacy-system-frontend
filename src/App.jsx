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

            <Route path='/compras/' element={<MainLayout children={<ListaCompras/>}/>}/>
            <Route path='/compras/:id' element={<MainLayout children={<DetalheCompras/>}/>}/>
            <Route path='/compras/form/:id' element={<MainLayout children={<FormularioCompras/>}/>}/> 

            <Route path='/lotes/' element={<MainLayout children={<ListaLotes/>}/>}/>
            <Route path='/lotes/:id' element={<MainLayout children={<DetalheLotes/>}/>}/>
            <Route path='/lotes/form/:id' element={<MainLayout children={<FormularioLotes/>}/>}/>

            <Route path='/perdas/' element={<MainLayout children={<ListaPerdas/>}/>}/>
            <Route path='/perdas/:id' element={<MainLayout children={<DetalhePerdas/>}/>}/>
            <Route path='/perdas/form/:id' element={<MainLayout children={<FormularioPerdas/>}/>}/>

            <Route path='/devolucoes/' element={<MainLayout children={<ListaDevolucoes/>}/>}/>
            <Route path='/devolucoes/:id' element={<MainLayout children={<DetalheDevolucoes/>}/>}/>
            <Route path='/devolucoes/form/:id' element={<MainLayout children={<FormularioDevolucoes/>}/>}/>

            <Route path='/clientes/' element={<MainLayout children={<ListaClientes/>}/>}/>
            <Route path='/clientes/:id' element={<MainLayout children={<DetalheClientes/>}/>}/>
            <Route path='/clientes/form/:id' element={<MainLayout children={<FormularioClientes/>}/>}/>

            <Route path='/novaVenda/' element={<MainLayout children={<NovaVenda/>}/>}/>

            <Route path='*' element={<Pagina404/>}/>
         </Routes>
      </BrowserRouter>
   )
}

export default App