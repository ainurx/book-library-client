import React from 'react'

import styles from './styles.module.css'

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) =>{
    return(
        <div className={styles.background}>
            {children}
        </div>
    )
}

export default Layout