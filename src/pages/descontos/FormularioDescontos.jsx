import { React } from 'react'
import { useParams } from 'react-router-dom'

import { urlServer } from '../../serverConfig';
import { parametrosDescontos } from './pr_descontos';

import ComponenteFormulario from '../../components/componenteFormulario/ComponenteFormulario';

const FormularioDescontos = () => {

  const { id } = useParams();

  return (
    <ComponenteFormulario
      parametros={parametrosDescontos}
      idFetch={`${id}`}
      urlFetch={`${urlServer}/discounts/`}
      urlVoltar={'/descontos/'}
    />
  )
}

export default FormularioDescontos