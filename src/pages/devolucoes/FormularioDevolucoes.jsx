import React from 'react';
import { useParams } from 'react-router-dom';

import { urlServer } from '../../serverConfig';
import { parametrosDevolucoes } from './pr_devolucoes';

import ComponenteFormulario from '../../components/componenteFormulario/ComponenteFormulario';

const FormularioDevolucoes = () => {

  const { id } = useParams();

  return (
    <ComponenteFormulario
      parametros={parametrosDevolucoes}
      idFetch={`${id}`}
      urlFetch={`${urlServer}/returns/`}
      urlVoltar={'/devolucoes/'}
    />
  )
}

export default FormularioDevolucoes