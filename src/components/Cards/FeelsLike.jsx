import React, { useEffect } from 'react'
import { WiThermometer } from "react-icons/wi";
import useAuth from '../../Context/useAuth';
import axios from 'axios';

function FeelsLike() {
    const { feelLike, setFeelLike, prec, setPrec, lat, long } = useAuth()
    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(`https://api.open-meteo.com/v1/forecast`, {
                headers: {},
                params: {
                    latitude: lat,
                    longitude: long,
                    hourly: "apparent_temperature",

                }
            })
            setFeelLike(res.data.hourly.apparent_temperature[0])



        }
        fetchData()



    }, [lat, long])

    return (
        <div className='card   flex h-40 w-full flex-col items-stretch  rounded-3xl '>
            <div className='flex flex-row gap-2 items-center'><WiThermometer />
                <h3 className=' text-sm font-semibold'>Feels Like</h3></div>

            <h3 className='mt-2 h-full'>{feelLike}°</h3>
            <h3 className='text-xs'>Wind is making it feel colder.</h3>


        </div >
    )
}

export default FeelsLike