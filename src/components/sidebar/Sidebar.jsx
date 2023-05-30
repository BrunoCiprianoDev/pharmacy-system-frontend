import { React } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Sidebar.module.css'
import { parametrosSideBar } from './pr_sidebar'

const Sidebar = () => {

   return (
      <div className={styles['MainContainer']}>
         <nav className={styles['NavContainer']}>
            {
               parametrosSideBar.map((parameter) => (
                  <NavLink
                     key={parameter.id}
                     className={styles.NavLink}
                     to={parameter.to}>
                     <img src={parameter.icon} alt={parameter.name} />
                     <p>{parameter.name}</p>
                  </NavLink>
               ))
            }
         </nav>
      </div>
   )
}

export default Sidebar