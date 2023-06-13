import React from 'react'

import styles from './ComponenteFormulario.module.css'

import Loading from '../loading/Loading'

import AlertError from '../alertContainer/alertError/AlertError';
import InputAutoComplete from '../inputAutoComplete/InputAutoComplete';
import SelectCustomizado from '../selectCustomizado/SelectCustomizado';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const ComponenteFormulario = ({
  parametros,
  idFetch,
  urlFetch,
  urlVoltar,
}) => {

  const navigate = useNavigate();
  const { data, httpConfig, loading, error, responseMessage } = useFetch(`${urlFetch}`, idFetch !== 'adicionar' ? `${idFetch}` : ``);
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (idFetch && data) {
      parametros.forEach((parametro) => {
        setValue(parametro.atributo, data[parametro.atributo]);
      });
    }
  }, [data]);

  const onSubmit = (e) => {
    if (idFetch === 'adicionar') {
      httpConfig(e, "POST");
      /*parametros.map((parametro) => (
        reset(formValues => ({
          ...formValues,
          [parametro.atributo]: ''
        }))
      ))*/
    } else {
      console.log(e);
      httpConfig(e, 'PUT');
    }
  }

  const handleBack = () => {
    navigate(urlVoltar);
  }


  return (
    <div className={styles.MainContainer}>
      {loading && <Loading />}
      {responseMessage && <AlertError>{responseMessage}</AlertError>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles['FormContainer']}>
          {parametros.map((parametro) => (
            <div key={parametro.id}>
              <label className={styles.LabelsForm}>{parametro.rotulo}
                {(() => {

                  switch (parametro.tipo) {
                    case "text":
                      return <input name={parametro.atributo}
                        {...register(parametro.atributo)}
                        type={parametro.tipo}
                        placeholder={parametro.placeholder && parametro.placeholder}
                      />;

                    case "date":
                      return <input name={parametro.atributo}
                        {...register(parametro.atributo)}
                        type={parametro.tipo}
                      />;

                    case "number":
                      return <input name={parametro.atributo}
                        {...register(parametro.atributo)}
                        type={parametro.tipo} step='.01' required
                        placeholder={parametro.placeholder && parametro.placeholder}
                      />;

                    case "textarea":
                      return <textarea name={parametro.atributo}
                        {...register(parametro.atributo)}
                        type={parametro.tipo} rows='3' required
                        placeholder={parametro.placeholder && parametro.placeholder}
                      />;

                    case "password":
                      return <input name={parametro.atributo}
                        {...register(parametro.atributo)}
                        type={parametro.tipo} required
                        placeholder={parametro.placeholder && parametro.placeholder}
                      />;

                    case "email":
                      return <input name={parametro.atributo}
                        {...register(parametro.atributo)}
                        type={parametro.tipo} required
                        placeholder={parametro.placeholder && parametro.placeholder}
                      />;

                    case "select":
                      return <select {...register(parametro.atributo)} required>
                        {parametro.opcoes.map((opcao) => (
                          <option key={opcao.id}>{opcao.valor}</option>
                        ))}
                      </select>;

                    case "autoComplete":
                      return <InputAutoComplete
                        attribute={parametro.atributoSelect}
                        url={parametro.url}
                        attributeVisible={parametro.atributoVisivel}
                        register={register}
                        setValue={setValue}
                        hookForm={true}
                      />;

                    case "selectBox":
                      return <SelectCustomizado
                        register={register}
                        urlFetch={parametro.urlFetch}
                        atributo={parametro.atributo}
                      />;
                    default:
                      return null;
                  }
                })()}
              </label>
            </div>
          ))}
        </div>
        <div className={styles.SubmitArea}>
          <input type="submit" value='Salvar' className={styles.SubmitButton} />
        </div>
      </form>
      <div className={styles.SubmitArea}>
        <button className={styles.ButtonBack} onClick={() => (handleBack())}>Voltar</button>
      </div>
    </div>
  )
}

export default ComponenteFormulario