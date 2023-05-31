import React from 'react'

import { useParams } from 'react-router-dom'

import { urlServer } from '../../serverConfig';
import { parametrosPerdas } from './pr_perdas';

import ComponenteFormulario from '../../components/componenteFormulario/ComponenteFormulario';


const FormularioPerdas = () => {

    const { id } = useParams();

    return (
        <ComponenteFormulario
            parametros={parametrosPerdas}
            idFetch={`${id}`}
            urlFetch={`${urlServer}/losses/`}
            urlVoltar={'/perdas/'}
        />
    )
}

export default FormularioPerdas