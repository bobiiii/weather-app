import React from 'react'
import Weather from './Cards/Weather'
import HourlyForecast from './Cards/HourlyForecast'
import Cards from './Cards/Cards'

function Main() {
    return (
        <div className='container m-auto   mt-4 mb-2'>
            <Cards />
        </div>
    )
}

export default Main