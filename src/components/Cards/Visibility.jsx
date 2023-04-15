import React from 'react'
import { MdVisibility } from "react-icons/md";
import useAuth from '../../Context/useAuth';
function Visibility() {
    const { data } = useAuth()
    function visibilityfunc(distance) {
        return distance / 1000
    }


    return (
        <div className='card h-40 flex flex-col items-stretch'>
            <div className='flex flex-row gap-2 items-center'><MdVisibility />
                <h3 className=' text-sm font-semibold'>Visibility</h3></div>
            <h3 className='mt-2 h-full'>{visibilityfunc(data.visibility)} km</h3>
            <h3 className='text-xs'>It's perfectly clear right now.</h3>

        </div>
    )
}

export default Visibility