import { HiSun } from "react-icons/hi";
import React, { useEffect } from 'react'
import axios from 'axios';
import useAuth from '../../Context/useAuth';

function UVIndex() {
    const { lat, long, UVIndex, setUVIndex } = useAuth()
    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(`https://api.open-meteo.com/v1/forecast`, {
                headers: {},
                params: {
                    latitude: lat,
                    longitude: long,
                    daily: "uv_index_max,uv_index_clear_sky_max",
                    timezone: "auto",
                }
            })
            setUVIndex(res.data.daily.uv_index_max[0])
        }
        fetchData()



    }, [lat, long])

    function dataMessage(data) {
        let result;
        switch (true) {
            case data <= 2:
                result = "LOW"
                break
            case data > 2 && data < 5:
                result = "MODERATE"
                break
            case data > 5 && data <= 7:
                result = "HIGH"
                break
            case data > 7 && data <= 10:
                result = "VERY HIGH"
                break
            case data > 10 && data <= 11:
                result = "EXTREME"
                break
            default:
                return "invalid data value"
        }
        return result

    }


    function UVIndexMessage(uvIndex) {
        switch (true) {
            case uvIndex < 3:
                return "No protection needed.";
            case uvIndex < 6:
                return "Wear a hat and use sunscreen.";
            case uvIndex < 8:
                return "Take extra precautions.";
            case uvIndex < 11:
                return "Wear protective clothing. Avoid the sun during peak hours.";
            default:
                return "Take all precautions, including staying indoors during peak hours.";
        }
    }
    return (
        <div className='card h-40 flex flex-col items-stretch '>
            <div className='flex flex-row gap-2 items-center'><HiSun />
                <h3 className=' text-sm font-semibold'>UV Index</h3></div>



            <div className='mt-2 h-full'>
                <h3>{UVIndex}</h3>
                <h3>{dataMessage(UVIndex)}</h3>
            </div>
            <h3 className='text-xs'>{UVIndexMessage(UVIndex)}</h3>
        </div>
    )
}

export default UVIndex