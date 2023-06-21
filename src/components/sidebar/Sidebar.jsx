import { React, useState } from 'react'
import { NavLink } from 'react-router-dom'

import iconSair from '../../assets/icon-sair.png'
import styles from './Sidebar.module.css'
import { parametrosSideBar } from './pr_sidebar'
import { useAuth } from '../../hooks/useAuth'

const Sidebar = () => {

   const [credencial] = useState(JSON.parse(sessionStorage.getItem("credencial")));
   const {logout} = useAuth();
   
   const checarPermissao = (permissao) => {
      if(permissao === 'manager'){
         return credencial.rule === 'manager' ? true : null;
      }
      return true;
   }

   return (
      <div className={styles['MainContainer']}>
         <nav className={styles['NavContainer']}>
            {
               parametrosSideBar.map((parameter, index) => (
                  checarPermissao(parameter.permissao) ? <NavLink
                     key={index}
                     className={styles.NavLink}
                     to={parameter.to}>
                     <img src={parameter.icon} alt={parameter.name} />
                     <p>{parameter.name}</p>
                  </NavLink> : ''
               ))
            }
            <button className={styles['ButtonExit']} onClick={()=> logout()}>
               <img src={iconSair} alt="sair" />
            </button>
         </nav>
      </div>
   )
}

export default Sidebar