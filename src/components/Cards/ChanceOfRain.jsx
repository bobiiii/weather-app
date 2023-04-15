import React from 'react'
import { IoRainy } from "react-icons/io5";
function ChanceOfRain() {
    return (
        <div className='card col-span-2 h-40 flex flex-col items-stretch'>
            <div className='flex flex-row gap-2 items-center'><IoRainy />
                <h3 className=' text-sm font-semibold'>Chance of Rain</h3></div>

        </div>
    )
}

export default ChanceOfRain