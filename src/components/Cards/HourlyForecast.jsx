import React from 'react'
import { BiTime } from "react-icons/bi";

function HourlyForecast() {
    return (
        <div className=" card p-4 bg-slate-200">
            <div className='flex flex-row gap-2 items-center'><BiTime />
                <h3 className=' text-sm font-semibold'>Hourly Forecast</h3></div>
            <div className='flex flex-row gap-3  overflow-x-scroll py-3'>
                <div className='flex flex-col  items-center'>
                    <span >01</span>
                    <span>cloud</span>
                    <span>03&deg;</span>
                </div>
                <div className='flex flex-col  items-center '>
                    <span >01</span>
                    <span>cloud</span>
                    <span>03&deg;</span>
                </div>
                <div className='flex flex-col items-center '>
                    <span >01</span>
                    <span>cloud</span>
                    <span>03&deg;</span>
                </div>
                <div className='flex flex-col   items-center'>
                    <span >01</span>
                    <span>cloud</span>
                    <span>03&deg;</span>
                </div>
                <div className='flex flex-col   items-center'>
                    <span >01</span>
                    <span>cloud</span>
                    <span>03&deg;</span>
                </div>
                <div className='flex flex-col   items-center'>
                    <span >01</span>
                    <span>cloud</span>
                    <span>03&deg;</span>
                </div>
                <div className='flex flex-col   items-center'>
                    <span >01</span>
                    <span>cloud</span>
                    <span>03&deg;</span>
                </div>

            </div>
        </div>
    )
}

export default HourlyForecast