import React from 'react'
import { TiLocationArrow } from "react-icons/ti";
import useAuth from '../../Context/useAuth'

function Weather() {
    const { loading, lat, setLat, long, setLong, data, setData } = useAuth()

    function convertToDate(timezone, dt) {
        let utc_time = new Date(dt * 1000);
        let local_time = new Date(utc_time.getTime() + timezone * 1000);
        let local_time_Day = local_time.toLocaleString("en-us", {
            timeZone: "UTC",
            weekday: "long",
        });
        return local_time_Day;
    }

    function getLocalTime(timezone, dt) {

        let utc_time = new Date(dt * 1000);

        let local_time = new Date(utc_time.getTime() + timezone * 1000);

        let local_time_format = local_time.toLocaleTimeString("en-US", {
            timeZone: "UTC",
            hour12: true,
            hour: "numeric",
            minute: "numeric",
        });

        return local_time_format;
    }

    return (
        <>

            {loading ? <div>please wait </div> :
                <div className='card h-[21rem]   mb-5'>
                    <div className='flex justify-between p-3'>
                        <h3>{convertToDate(data.timezone, data.dt)}</h3>
                        <h3>07:30 PM</h3>
                    </div>


                    <div className='flex flex-row '>
                        <h3 className='text-2xl px-3 pb-3  font-semibold '>
                            {data.name}


                        </h3>
                        <TiLocationArrow />
                    </div>

                    <div className='flex justify-center mb-8 '>
                        <h3 className='text-7xl'>
                            {Math.round(data.main.temp)}&deg;

                        </h3>







                    </div>
                    <h3>Real Feel {data.main.feels_like}&deg;</h3>
                    <div className='flex justify-between gap-3'>
                        <h3 className=''>

                            {data.wind.speed.toFixed(1)}m/s

                        </h3>
                        <h3>Sunrise {getLocalTime(data.timezone, data.sys.sunrise)}</h3>
                    </div>
                    <div className='flex  justify-between gap-3'>
                        <h3 className=''>Humidity {data.main.humidity}%</h3>
                        <h3>Sunset {getLocalTime(data.timezone, data.sys.sunset)}</h3>
                    </div>





                </div>}

        </>
    )
}

export default Weather