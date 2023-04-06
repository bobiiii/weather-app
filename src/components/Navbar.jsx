import React from 'react'

function Navbar() {
    return (
        <div className='flex flex-col justify-between'>
            <header>
                <nav className='h-12 flex justify-between items-center shadow-md px-4'>


                    <h4 className='text-2xl'>WeatherAPI</h4>
                    <div className='flex justify-between'>
                        <h4 className='p-2'>WeatherAPI</h4>
                        <h4 className='p-2'>WeatherAPI</h4>
                    </div>
                </nav>

            </header>

        </div>
    )
}

export default Navbar