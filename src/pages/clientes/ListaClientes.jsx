import React from 'react';

import { parametrosClientes } from './pr_clientes';
import { urlServer } from '../../serverConfig';
import ComponenteLista from '../../components/componenteLista/ComponenteLista';

const ListaClientes = () => {

  return (
    <ComponenteLista
      titulo={'Clientes'}
      urlFetch={`${urlServer}/clients`}
      parametros={parametrosClientes.slice(0, 1).concat(parametrosClientes.slice(10, 13))}
      sessao={"clientes"}
      opcaoEditar={true}
    />
  )
}

export default ListaClientes
