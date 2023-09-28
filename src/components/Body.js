import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header';
import MainContainer from './MainContainer';

const Body = () => {
  return (
    <div className='flex'>

<Sidebar></Sidebar>
<MainContainer></MainContainer>

      
    </div>
  )
}

export default Body;
