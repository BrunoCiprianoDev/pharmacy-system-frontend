import React from 'react'

import styles from './ComponentePaginacao.module.css'

const ComponentePaginacao = ({ page, setPage}) => {


  const handlePrevPage = () => {
    if(page > 0){
      setPage(page-1)
    }
  }

  const handleNextPage = () => {
    setPage(page+1);
  }

  return (
    <div className={styles.PagesArea}>
      <button
        className={styles.buttonActive}
        onClick={()=> handlePrevPage()}
      >-
      </button>
      <button className={styles.PagesArea}
      >
        {page}
      </button>
      <button
        className={styles.buttonActive}
        onClick={()=> handleNextPage()}
      >+
      </button>
    </div>
  )
}

export default ComponentePaginacao