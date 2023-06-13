import React from 'react'
import ComponenteLista from '../../components/componenteLista/ComponenteLista';

import { urlServer } from '../../serverConfig';
import { parametrosDevolucoes } from './pr_devolucoes';

const ListaDevolucoes = () => {

  return (
     <ComponenteLista
      titulo={'Retorno'}
      urlFetch={`${urlServer}/returns`}
      parametros={parametrosDevolucoes}
      sessao={"devolucoes"}
      opcaoEditar={false}
    />
  )
}

export default ListaDevolucoes