import React from 'react'
import ComponenteLista from '../../components/componenteLista/ComponenteLista'
import { parametrosVendas } from './pr_vendas'
import { urlServer } from '../../serverConfig'

const ListaVenda = () => {
    return (
        <ComponenteLista
            titulo={'Vendas'}
            urlFetch={`${urlServer}/sales`}
            parametros={parametrosVendas}
            sessao={"vendas"}
            opcaoEditar={true}
            manualUrl={true}
        />
    )
}

export default ListaVenda