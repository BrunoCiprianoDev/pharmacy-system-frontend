import React from 'react'
import ComponenteLista from '../../components/componenteLista/ComponenteLista';

import { urlServer } from '../../serverConfig';
import { parametrosDescontos } from './pr_descontos';

const ListaDescontos = () => {

  return (
    <ComponenteLista
      titulo={'Descontos'}
      urlFetch={`${urlServer}/discounts`}
      parametros={parametrosDescontos}
      sessao={"descontos"}
      opcaoEditar={true}
    />
  )
}

export default ListaDescontos