import { React, useState } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Sidebar.module.css'
import { parametrosSideBar } from './pr_sidebar'

const Sidebar = () => {

   const [credencial] = useState(JSON.parse(sessionStorage.getItem("credencial")));
   
   const checarPermissao = (permissao) => {
      console.log("tste:", credencial.rule);
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
            <button className={styles['NavContainer']}>
               Sair
            </button>
         </nav>
      </div>
   )
}

export default Sidebar