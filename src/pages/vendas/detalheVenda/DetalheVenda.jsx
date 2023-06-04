import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import styles from './DetalheVenda.module.css'

import Loading from '../../../components/loading/Loading';
import AlertError from '../../../components/alertContainer/alertError/AlertError';
import { parametroItemsVenda, parametrosVendas } from '../pr_vendas';
import { urlServer } from '../../../serverConfig';
import ComponenteLista from '../../../components/componenteLista/ComponenteLista';

import { useFetch } from '../../../hooks/useFetch';

const DetalheVenda = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const {data, loading, error} = useFetch(`${urlServer}/sales/${id}`, ``);


  return (
    <div className={styles.MainContainer}>
      {loading && <Loading />}
      {error && <AlertError>{error}</AlertError>}
      {<div className={styles.LeftArea}>
        <h2>Detalhes da venda</h2>
        <div className={styles['BodyData']}>
          {parametrosVendas.map((venda) => (
            <div key={venda.id}>
              <label>{venda.rotulo}</label>
              <p>{data && data[venda.atributo]}</p>
            </div>
          ))}
        </div>
        <div className={styles.TextArea}>
          <p>
            Nessa área é possivel conferir os detalhes cada venda.
          </p>
        </div>
        <button
          className={styles.ButtonVoltar}
          onClick={() => navigate(`/vendas/`)}>Voltar
        </button>
      </div>}
      <div className={styles.RightArea}>
        <ComponenteLista
          titulo={'Itens da compra'}
          urlFetch={`${urlServer}/saleItems/sale/${id}`}
          parametros={parametroItemsVenda}
          urlDetalhe={`/compras/detail/`}
          opcaoEditar={false}
          manualUrl={true}
        />
      </div>
    </div>
  )
}

export default DetalheVenda