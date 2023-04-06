import React from 'react'
import Navbar from "./Navbar"
import Main from "./Main"
import Footer from "./Footer"

function Layout({ children }) {
    return (
        <div className='min-h-screen flex flex-col justify-between'>
            <Navbar />
            <Main >{children}</Main>
            <Footer />
        </div>
    )
}

export default Layout