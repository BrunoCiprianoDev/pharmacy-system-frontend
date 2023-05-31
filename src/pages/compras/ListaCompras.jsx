import React from 'react'

import { parametrosCompras } from './pr_compras';
import { urlServer } from '../../serverConfig';
import ComponenteLista from '../../components/componenteLista/ComponenteLista';

const ListaCompras = () => {
    return (
        <ComponenteLista
            titulo={'Compras'}
            urlFetch={`${urlServer}/purchases`}
            parametros={parametrosCompras}
            sessao={"compras"}
            opcaoEditar={true}
        />
    )
}

export default ListaCompras