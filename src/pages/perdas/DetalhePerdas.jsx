import React from 'react'

import { useParams } from 'react-router-dom'

import { urlServer } from '../../serverConfig';
import { parametrosPerdas } from './pr_perdas';

import ComponenteDetalhe from '../../components/componenteDetalhe/ComponenteDetalhe';

const DetalhePerdas = () => {

  const { id } = useParams();

  return (
    <ComponenteDetalhe
      parametros={parametrosPerdas}
      idFetch={id}
      urlFetch={`${urlServer}/losses/`}
      urlEditar={'/perdas/form/' + id}
      urlVoltar={'/perdas/'}
    />
  )
}

export default DetalhePerdas