import React from 'react'
import styles from './EventList.module.css'

const EventList = ({ list, setList }) => {

  const tirarUnidades = (item) => {
    const updatedList = list.map((listItem) => {
      if (listItem.lotId === item.lotId) {
        const updatedUnits = Math.max(0, listItem.units - 1);
        const updatedSellPrice = updatedUnits * listItem.fullPrice;

        if (updatedUnits === 0) {
          return null; // Retorna null para remover o item da lista
        }

        return {
          ...listItem,
          units: updatedUnits,
          sellPrice: updatedSellPrice
        };
      }
      return listItem;
    });

    const filteredList = updatedList.filter((item) => item !== null); // Filtra os elementos nulos para remover da lista

    setList(filteredList);
  };

  const adicionarUnidades = (item) => {
    if (item.maxUnits === item.units) {
      return;
    }
    const updatedList = list.map((listItem) => {
      if (listItem.lotId === item.lotId) {
        return {
          ...listItem,
          units: listItem.units + 1,
          sellPrice: (listItem.units + 1) * listItem.fullPrice
        };
      }
      return listItem;
    });

    setList(updatedList);
  };

  return (
    <>
      <div className={styles['event-list-panel']}>
        <div className={styles['event-list-header-form']}>
        </div>
      </div>
      <table className={styles['event-table']}>
        <thead className={styles['event-table-header']}>
          <tr className={styles['event-table-row-header']}>
            <th>Lote</th>
            <th>Nome</th>
            <th>valor</th>
            <th>Unidades</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {list && list.map((item, index) => (
            <tr key={index} className={styles['event-table-row-body']}>
              <td>{item.number}</td>
              <td>{item.name}</td>
              <td>{item.fullPrice}</td>
              <td>{item.units}</td>
              <td>{item.sellPrice}</td>
              <td>
                <button onClick={() => tirarUnidades(item)}>-</button>
                <button onClick={() => adicionarUnidades(item)}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default EventList