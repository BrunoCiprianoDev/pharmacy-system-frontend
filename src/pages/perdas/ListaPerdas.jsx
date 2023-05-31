import React from 'react'

import { useParams } from 'react-router-dom'

import ComponenteLista from '../../components/componenteLista/ComponenteLista';

import { urlServer } from '../../serverConfig';
import { parametrosPerdas } from './pr_perdas';


const ListaPerdas = () => {

    const { id } = useParams();

    return (
        <ComponenteLista
            titulo={'Perdas'}
            urlFetch={`${urlServer}/losses`}
            parametros={parametrosPerdas}
            sessao={'perdas'}
            opcaoEditar={true}
        />
    )
}

export default ListaPerdas