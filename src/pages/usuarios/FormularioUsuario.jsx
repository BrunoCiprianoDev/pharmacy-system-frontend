import React from 'react'
import ComponenteFormulario from '../../components/componenteFormulario/ComponenteFormulario'
import { urlServer } from '../../serverConfig'
import { parametrosUsuarios } from './pr_usuarios'

const FormularioUsuario = () => {
  return (
    <ComponenteFormulario
        parametros={parametrosUsuarios}
        idFetch={`adicionar`}
        urlFetch={`${urlServer}/usuarios`}
    />
  )
}

export default FormularioUsuario