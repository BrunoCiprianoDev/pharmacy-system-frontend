import React from 'react'
import styles from './ListaPesquisa.module.css'
import AlertError from '../alertContainer/alertError/AlertError'
import Loading from '../loading/Loading'
import { useState } from 'react'
import { urlServer } from '../../serverConfig'
import { useFetch } from '../../hooks/useFetch'
const ListaPesquisa = ({ list, setList, vendaId }) => {

  const [inputSearch, setInputSearch] = useState('');
  const { data, httpConfig, loading, error } = useFetch(`${urlServer}/lots/search`, `?query=${inputSearch}`);

  const adicionarNaLista = (item) => {
    const exists = list.find((obj) => obj.lotId === item.id);
    if (exists) {
      return;
    }

    setList([...list, {
      lotId: item.id,
      number: item.number,
      name: item.merchandise.name,
      maxUnits: item.units,
      units: 1,
      fullPrice: item.merchandise.fullPrice,
      sellPrice: item.merchandise.fullPrice
    }])
  }

  return (
    <div className={styles.SearchList}>
      <form >
        {loading && <Loading />}
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          type="text"
          placeholder='Insira informações sobre a mercadoria'
        />
      </form>
      <table>
        <thead>
          <tr className={styles.HeaderList}>
            <th>Lote</th>
            <th>Nome</th>
            <th>Unidades</th>
            <th>Preço c/desconto</th>
          </tr>
        </thead>
        <tbody>
          {error && <AlertError>Erro no carregamento!</AlertError>}
          {data && data.map((item, index) => (
            <tr
              key={index}
              className={styles.ElementList}
              onClick={() => adicionarNaLista(item)}
            >
              <td>{item.number}</td>
              <td>{item.merchandise.name}</td>
              <td>{item.units}</td>
              <td>R${item.merchandise.fullPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListaPesquisa