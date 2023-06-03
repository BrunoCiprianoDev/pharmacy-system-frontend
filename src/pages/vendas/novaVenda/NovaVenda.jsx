import { React, useState } from 'react'

import styles from './NovaVenda.module.css'
import InputAutoComplete from '../../../components/inputAutoComplete/InputAutoComplete'
import { urlServer } from '../../../serverConfig'
import ListaPesquisa from '../../../components/listaPesquisa/ListaPesquisa'
import EventList from '../../../components/eventList/EventList'

const NovaVenda = () => {

  const [funcionario, setFuncionario] = new useState('');
  const [cliente, setcliente] = new useState('');

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
          <ListaPesquisa />
        </div>
      </div>
      <div className={styles.RightArea}>
        <EventList/>
      </div>
    </div>
  )
}

export default NovaVenda