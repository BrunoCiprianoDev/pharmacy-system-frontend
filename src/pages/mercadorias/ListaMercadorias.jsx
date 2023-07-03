import React from 'react'

import { parametrosMercadorias } from './pr_mercadorias';
import { urlServer } from '../../serverConfig';
import ComponenteLista from '../../components/componenteLista/ComponenteLista';

const ListaMercadorias = () => {

   return (
      <ComponenteLista
         titulo={'Mercadorias'}
         urlFetch={`${urlServer}/merchandises`}
         parametros={parametrosMercadorias.slice(0, 2).concat(parametrosMercadorias.slice(11, 12))}
         sessao={'mercadorias'}
         opcaoEditar={true}
      />
   )
}

export default ListaMercadorias