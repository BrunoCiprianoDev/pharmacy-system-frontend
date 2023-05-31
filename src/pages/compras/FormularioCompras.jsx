import React from 'react'
import { useParams } from 'react-router-dom'

import { parametrosCompras } from './pr_compras';
import { urlServer } from '../../serverConfig';

import ComponenteFormulario from '../../components/componenteFormulario/ComponenteFormulario';

const FormularioCompras = () => {

    const { id } = useParams();

    return (
        <ComponenteFormulario
            parametros={parametrosCompras}
            idFetch={`${id}`}
            urlFetch={`${urlServer}/purchases/`}
            urlVoltar={'/compras/'}
        />
    )
}

export default FormularioCompras