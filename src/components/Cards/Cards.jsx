import React from 'react'
import Weather from './Weather'
import HourlyForecast from './HourlyForecast'

import AirPollution from './AirPollution'
import Sunset from './Sunset'
import Wind from './Wind'
import UVIndex from './UVIndex'
import Precipitation from './Precipitation'
import FeelsLike from './FeelsLike'
import Humidity from './Humidity'
import Visibility from './Visibility'
import Pressure from './Pressure'
import ChanceOfRain from './ChanceOfRain'

function Cards() {
    return (
        <div className='container mx-auto '>
            <div className='flex flex-col md:flex-row gap-4 '>
                <div className='p-6 sm:p-0 md:w-1/3 '>
                    <Weather />
                    <HourlyForecast />
                </div>
                <div className=' w-full grid grid-cols-2 md:grid-cols-4  gap-2  '>

                    <AirPollution />
                    <Sunset />
                    <Wind />
                    <UVIndex />
                    <Precipitation />
                    <FeelsLike />
                    <Humidity />
                    <Visibility />
                    <Pressure />
                    <ChanceOfRain />

                </div>

            </div>
        </div>)
}

export default Cards