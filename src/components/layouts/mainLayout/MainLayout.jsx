import React from 'react'

import './MainLayout.css'
import Sidebar from '../../sidebar/Sidebar'

const MainLayout = ({ ...props }) => {
   return (
      <div className="App">
         <div className='Sidebar'>
            <Sidebar />
         </div>
         <div className='Contend'>
            {props.children}
         </div>
      </div>
   )
}

export default MainLayout