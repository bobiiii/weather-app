import React from 'react'
import Navbar from "./Navbar"
import Main from "./Main"
import Footer from "./Footer"
import SelectDays from './SelectDays'

function Layout({ children }) {
    return (
        <div className='min-h-screen bg-slate-900 text-white flex flex-col justify-between'>
            <Navbar />
            <SelectDays />
            <Main >{children}</Main>
            <Footer />
        </div>
    )
}

export default Layout