import iconeUsuario from '../../assets/icon-user.png'
import iconeFuncionario from '../../assets/icon-funcionario.png'
import iconeVendas from '../../assets/icon-vendas.png'
import iconeMercadorias from '../../assets/icon-mercadorias.png'
import iconeFornecedores from '../../assets/icon-fornecedores.png'
import iconePerdas from '../../assets/icon-perdas.png'
import iconeCompras from '../../assets/icon-compras.png'
import iconeEstoque from '../../assets/icon-estoque.png'
import iconeDevolucao from '../../assets/icon-devolucao.png'
import iconeClientes from '../../assets/icon-clientes.png'
import iconeDesconto from '../../assets/icon-desconto.png'

export const parametrosSideBar = [
  { id: 1, name: 'Usuarios', to: '/usuarios', value: 'USUARIOS', icon: iconeUsuario, permissao: 'manager' },
  { id: 2, name: 'Funcionários', to: "/funcionarios/", value: 'FUNCIONARIOS', icon: iconeFuncionario, permissao: 'manager' },
  { id: 3, name: 'Descontos', to: '/descontos/', value: 'DESCONTOS', icon: iconeDesconto, permissao: 'manager' },
  { id: 4, name: 'Mercadorias', to: '/mercadorias/', value: 'MERCADORIAS', icon: iconeMercadorias, permissao: 'manager' },
  { id: 5, name: 'Fornecedores', to: '/fornecedores/', value: 'FORNECEDORES', icon: iconeFornecedores, permissao: 'manager' },
  { id: 6, name: 'Compras', to: "/compras/", value: 'COMPRAS', icon: iconeCompras, permissao: 'manager' },
  { id: 7, name: 'Estoque', to: '/lotes/', value: 'ESTOQUE', icon: iconeEstoque, permissao: 'manager' },
  { id: 8, name: 'Perdas', to: '/perdas/', value: 'PERDAS', icon: iconePerdas, permissao: 'employee' },
  { id: 9, name: 'Vendas', to: '/novaVenda/', value: 'VENDAS', icon: iconeVendas, permissao: 'employee' },
  // { id: 10, name: 'Devoluções', to: '/devolucoes/', value: 'DEVOLUCOES', icon: iconeDevolucao, permissao: 'employee' },
  { id: 11, name: 'Clientes', to: '/clientes/', value: 'CLIENTES', icon: iconeClientes, permissao: 'employee' },
  // { id: 12, name: 'Relatórios', to: '/relatorios/', value: 'RELATORIOS', icon: iconeRelatorios }
]
