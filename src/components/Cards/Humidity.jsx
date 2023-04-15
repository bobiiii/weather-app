import React from 'react'
import { WiHumidity } from "react-icons/wi";
import useAuth from '../../Context/useAuth';
function Humidity() {
    const { loading, data } = useAuth()
    return (<>
        {loading ? "please wait" :

            <div className='card   flex h-40 w-full flex-col items-stretch  rounded-3xl '>

                <div className='flex flex-row gap-2 items-center'><WiHumidity />
                    <h3 className=' text-sm font-semibold'> Humidity</h3></div>
                <h3 className='mt-2 h-full'>{data.main.humidity}%</h3>
                <h3 className='text-xs'>The humidity is at a comfortable level.</h3>


            </div >

        }



    </>

    )
}

export default Humidity