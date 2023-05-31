import React from 'react'

import { useParams } from 'react-router-dom'

import { parametrosLotes } from './pr_lotes'
import { urlServer } from '../../serverConfig';
import ComponenteDetalhe from '../../components/componenteDetalhe/ComponenteDetalhe';

const DetalheLotes = () => {

    const { id } = useParams();

    return (
        <ComponenteDetalhe
            parametros={parametrosLotes}
            idFetch={id}
            urlFetch={`${urlServer}/lots/`}
            urlEditar={'/lotes/form/' + id}
            urlVoltar={'/lotes/'}
        />
    )
}

export default DetalheLotes