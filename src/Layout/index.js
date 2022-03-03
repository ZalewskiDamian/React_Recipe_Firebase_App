import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import MainView from '../views/MainView';

const Layout = ({ children }) => {
  return (
    <>
        <Sidebar />
        <MainView>
            {children}
        </MainView>
    </>
  )
}

export default Layout;