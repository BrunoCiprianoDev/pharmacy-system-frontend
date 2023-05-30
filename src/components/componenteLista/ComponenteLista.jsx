import { useState} from 'react';
import styles from './ComponenteLista.module.css'
import Loading from '../loading/Loading'
import AlertError from '../alertContainer/alertError/AlertError'
import BotoesLista from '../botoesLista/BotoesLista'
import Header from '../header/Header';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

const ComponenteLista = ({sessao, titulo, urlFetch, parametros, opcaoEditar }) => {

  const navigate = useNavigate();

  const [query, setQuery] = useState('');

  const {data, httpConfig, loading, error} = useFetch(`${urlFetch}`, `/search?query=${query}`);

  const handleEdit = (id) => {
    navigate(`/${sessao}/${id}`);
  }

  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  }

  return (
    <>
      <div className='Header'>
        <Header query={query} setQuery={setQuery} sessao={sessao} />
      </div>
      <div className={styles.MainContainer}>
        {loading && <Loading />}
        {error && <AlertError>Falha no carregamento!</AlertError>}
        <div className={styles.Title}>
          {titulo && <div>
            <h2>{titulo}</h2>
          </div>}
        </div>
        <table>
          <thead>
            <tr className={styles.HeaderList}>
              {parametros.map((parametro) => (
                <th key={parametro.id} className={styles.ElementData}>{parametro.rotulo}</th>
              ))}
              {opcaoEditar === true && <th className={styles.ElementData}></th>}
            </tr>
          </thead>
          <tbody>
            {data && data.map((item) => (
              <tr className={styles.ListComponent} key={item.id}>
                {parametros.map((parametro) => (
                  <td
                    key={parametro.id}
                    className={styles.ElementData}>
                    {item[parametro.atributo]}
                  </td>
                ))}
                {opcaoEditar === true && <BotoesLista
                  handleRemove={handleRemove}
                  handleEdit={handleEdit}
                  id={item.id} />}
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.PaginationArea}>
        </div>
      </div>
    </>
  )
}

export default ComponenteLista

