import React from 'react'
import { useParams } from 'react-router-dom'

import { parametrosLotes } from './pr_lotes'
import { urlServer } from '../../serverConfig';

import ComponenteFormulario from '../../components/componenteFormulario/ComponenteFormulario';

const FormularioLotes = () => {

    const { id } = useParams();

    return (
        <ComponenteFormulario
            parametros={parametrosLotes}
            idFetch={`${id}`}
            urlFetch={`${urlServer}/lots/`}
            urlVoltar={'/lotes/'}
        />
    )
}

export default FormularioLotes