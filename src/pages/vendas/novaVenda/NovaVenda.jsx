import { React, useState } from 'react'

import styles from './NovaVenda.module.css'
import InputAutoComplete from '../../../components/inputAutoComplete/InputAutoComplete'
import { urlServer } from '../../../serverConfig'
import ListaPesquisa from '../../../components/listaPesquisa/ListaPesquisa'
import EventList from '../../../components/eventList/EventList'

const NovaVenda = () => {

  const [funcionario, setFuncionario] = new useState('');
  const [cliente, setcliente] = new useState('');
  const [list, setList] = new useState([]);

  const registrarVenda = () => {
    console.log('Funcionário: ' + funcionario);
    console.log('Clientes : ' + cliente);
  }

  return (
    <div className={styles.MainContainer}>
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
            setValue={setFuncionario}
            attributeVisible={'name'}
          />
        </div>
        <div className={styles['lista-pesquisa-area']}>
          <ListaPesquisa list={list} setList={setList} />
        </div>
      </div>
      <div className={styles.RightArea}>
        <button
          className={styles.ButtonConcluir}
          onClick={() => navigate(`/compras/`)}>Concluir Venda
        </button>
        <EventList list={list} setList={setList} />
      </div>
    </div>
  )
}

export default NovaVenda