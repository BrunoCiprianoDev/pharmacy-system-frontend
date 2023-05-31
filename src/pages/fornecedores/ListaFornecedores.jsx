import React from 'react'

import { parametrosFornecedores } from './pr_fornecedor';
import { urlServer } from '../../serverConfig';
import ComponenteLista from '../../components/componenteLista/ComponenteLista';


export const ListaFornecedores = () => {

  return (
    <ComponenteLista
      titulo={'Fornecedores'}
      urlFetch={`${urlServer}/suppliers`}
      parametros={parametrosFornecedores.slice(0, 2).concat(parametrosFornecedores.slice(10, 12))}
      sessao={"fornecedores"}
      opcaoEditar={true}
    />
  )
}

export default ListaFornecedores
