import { React } from 'react';
import { useParams } from 'react-router-dom';

import { parametrosClientes } from './pr_clientes';
import { urlServer } from '../../serverConfig';

import ComponenteFormulario  from '../../components/componenteFormulario/ComponenteFormulario';

const FormularioClientes = () => {

  const { id } = useParams();

  return (
    <ComponenteFormulario
      parametros={parametrosClientes}
      idFetch={`${id}`}
      urlFetch={`${urlServer}/clients/`}
      urlVoltar={'/clientes/'}
    />
  )
}

export default FormularioClientes