import iconeHome from '../../assets/icon-home.png'
import iconeFuncionario from '../../assets/icon-funcionario.png'
import iconeVendas from '../../assets/icon-vendas.png'
import iconeMercadorias from '../../assets/icon-mercadorias.png'
import iconeFornecedores from '../../assets/icon-fornecedores.png'
import iconePerdas from '../../assets/icon-perdas.png'
import iconeCompras from '../../assets/icon-compras.png'
import iconeEstoque from '../../assets/icon-estoque.png'
import iconeDevolucao from '../../assets/icon-devolucao.png'
import iconeClientes from '../../assets/icon-clientes.png'
import iconeRelatorios from '../../assets/icon-relatorio.png'
import iconeDesconto from '../../assets/icon-desconto.png'

export const parametrosSideBar = [
  { id: 1, name: 'Painel principal', to: '/', value: 'DASHBOARD', icon: iconeHome },
  { id: 2, name: 'Funcionários', to: "/funcionarios/", value: 'FUNCIONARIOS', icon: iconeFuncionario },
  { id: 3, name: 'Descontos', to: '/descontos/', value: 'DESCONTOS', icon: iconeDesconto },
  { id: 4, name: 'Mercadorias', to: '/mercadorias/', value: 'MERCADORIAS', icon: iconeMercadorias },
  { id: 5, name: 'Fornecedores', to: '/fornecedores/', value: 'FORNECEDORES', icon: iconeFornecedores },
  { id: 6, name: 'Compras', to: "/compras/", value: 'COMPRAS', icon: iconeCompras },
  { id: 7, name: 'Estoque', to: '/lotes/', value: 'ESTOQUE', icon: iconeEstoque },
  { id: 8, name: 'Perdas', to: '/perdas/', value: 'PERDAS', icon: iconePerdas },
  { id: 9, name: 'Vendas', to: '/vendas/', value: 'VENDAS', icon: iconeVendas },
  { id: 10, name: 'Devoluções', to: '/devolucoes/', value: 'DEVOLUCOES', icon: iconeDevolucao },
  { id: 11, name: 'Clientes', to: '/clientes/', value: 'CLIENTES', icon: iconeClientes },
  { id: 12, name: 'Relatórios', to: '/relatorios/', value: 'RELATORIOS', icon: iconeRelatorios }
]
