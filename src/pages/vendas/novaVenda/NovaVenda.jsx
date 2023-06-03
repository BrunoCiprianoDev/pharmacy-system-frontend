import { React, useState } from 'react'

import styles from './NovaVenda.module.css'
import InputAutoComplete from '../../../components/inputAutoComplete/InputAutoComplete'
import { urlServer } from '../../../serverConfig'
import ListaPesquisa from '../../../components/listaPesquisa/ListaPesquisa'
import EventList from '../../../components/eventList/EventList'
import { useFetch } from '../../../hooks/useFetch'

import Loading from '../../../components/loading/Loading'
import AlertError from '../../../components/alertContainer/alertError/AlertError'
const NovaVenda = () => {

  const {httpConfig, responseMessage, loading, error} = useFetch( `${urlServer}/sales`, ``);
  const [funcionario, setFuncionario] = new useState('');
  const [cliente, setCliente] = new useState('');
  const [list, setList] = new useState([]);

  const registrarVenda = () => {
    const vendaObj = {
      employeeId: funcionario,
      clientId: cliente,
      saleItems: list.map(item => ({
        units: item.units,
        sellPrice: item.sellPrice,
        lotId: item.lotId
      }))
    };

    httpConfig(vendaObj, "POST");
  }

  return (
    <>
    <div className={styles.MainContainer}>
    {loading && <Loading />}
      <div className={styles.LeftArea}>
        <h2>Informações da venda:</h2>
        <div>
          <label>Funcionario:</label>
          <InputAutoComplete
            attribute={'id'}
            url={`${urlServer}/employees`}
            setValue={setFuncionario}
            attributeVisible={'name'}
          />
        </div>
        <div>
          <label>Cliente:</label>
          <InputAutoComplete
            attribute={'id'}
            url={`${urlServer}/clients`}
            setValue={setCliente}
            attributeVisible={'name'}
          />
        </div>
        <div className={styles['lista-pesquisa-area']}>
          <ListaPesquisa list={list} setList={setList} />
        </div>
      </div>
      <div className={styles.RightArea}>
      {responseMessage && <AlertError>{responseMessage}</AlertError>}
        <button
          className={styles.ButtonConcluir}
          onClick={() => registrarVenda()}>Concluir Venda
        </button>
        <EventList list={list} setList={setList} />
      </div>
    </div>
    </>
  )
}

export default NovaVenda