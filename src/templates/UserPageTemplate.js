import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';

const UserPageTemplate = ({ children }) => {
    return (
        <>
            <Sidebar />
            {children}
        </>
    )
}

export default UserPageTemplate;