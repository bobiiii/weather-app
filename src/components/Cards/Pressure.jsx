import React, { useEffect } from 'react'
import axios from 'axios';
import useAuth from '../../Context/useAuth';
import { WiBarometer } from "react-icons/wi";

function Pressure() {
    const { pressure, setPressure, lat, long, UVIndex, setUVIndex } = useAuth()
    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(`https://api.open-meteo.com/v1/forecast`, {
                headers: {},
                params: {
                    latitude: lat,
                    longitude: long,
                    hourly: "pressure_msl",

                }
            })

            setPressure(res.data.hourly.pressure_msl[0])
        }
        fetchData()



    }, [lat, long])


    return (
        <div className='card h-40 flex flex-col items-stretch'>
            <div className='flex flex-row gap-2 items-center'><WiBarometer />
                <h3 className=' text-sm font-semibold'>Pressure</h3></div>
            <h3 className='mt-2 h-full'>{Math.round(pressure)} hPa</h3>
            <h3 className='text-xs'>Very high pressure</h3>

        </div>
    )
}

export default Pressure