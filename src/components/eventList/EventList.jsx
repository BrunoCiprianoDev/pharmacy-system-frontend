import React from 'react'
import styles from './EventList.module.css'

const EventList = () => {

  const data = [
    { mercadoria: 'Mercadoria', valor: '25.4', unidades: '2' },
  ]

  return (
    <>
      <div className={styles['event-list-panel']}>
        <div className={styles['event-list-header-form']}>
        </div>
      </div>
      <table className={styles['event-table']}>
        <thead className={styles['event-table-header']}>
          <tr className={styles['event-table-row-header']}>
            <th>Nome</th>
            <th>valor</th>
            <th>Unidades</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item) => (
            <tr className={styles['event-table-row-body']}>
              <td>{item.mercadoria}</td>
              <td>{item.valor}</td>
              <td>{item.unidades}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default EventList