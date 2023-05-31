import React from 'react'
import ComponenteLista from '../../components/componenteLista/ComponenteLista'
import { urlServer } from '../../serverConfig'

import { parametrosLotes} from './pr_lotes'
const ListaLotes = () => {
    return (
        <ComponenteLista
            titulo={'Lotes'}
            urlFetch={`${urlServer}/lots`}
            parametros={parametrosLotes}
            sessao={"lotes"}
            opcaoEditar={true}

        />
    )
}

export default ListaLotes