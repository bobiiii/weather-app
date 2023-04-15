import React, { useEffect } from 'react'
import axios from 'axios';
import { IoWaterSharp } from "react-icons/io5";
import useAuth from '../../Context/useAuth';

function Precipitation() {
    const { prec, setPrec, lat, long } = useAuth()
    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(`https://api.open-meteo.com/v1/forecast`, {
                headers: {},
                params: {
                    latitude: lat,
                    longitude: long,
                    daily: "precipitation_sum",
                    timezone: "auto",
                }
            })
            setPrec(res.data.daily.precipitation_sum[0])

        }
        fetchData()



    }, [lat, long])



    return (
        <div className='card  flex h-40 w-full flex-col items-stretch overflow-hidden rounded-3xl bg-white p-4 shadow-lg dark:bg-neutral-800'>
            <div className='flex flex-row gap-2 items-center'><IoWaterSharp />
                <h3 className=' text-sm font-semibold'>Precipitation</h3></div>
            <h3 className='mt-3 h-full'>{prec} </h3>
            <h3 className='text-xs'>last 3 hours</h3>

        </div>
    )
}

export default Precipitation