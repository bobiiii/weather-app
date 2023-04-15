import React from 'react'
import { BsSunriseFill, BsSunsetFill } from "react-icons/bs";
import useAuth from '../../Context/useAuth';
function Sunset() {
    const { data, loading } = useAuth()

    function getLocaleTime(timezone, dt, boolean) {
        let utc_time = new Date(dt * 1000)
        let local_time = new Date(utc_time.getTime() + timezone * 1000)
        let local_time_format = local_time.toLocaleTimeString("en-US", {
            timeZone: "UTC",
            hour12: boolean,
            hour: "numeric",
            minute: "numeric"
        })
        return local_time_format

    }

    const DynamicTitle = (data) => {
        const sunset = getLocaleTime(data.timeZone, data.sys.sunset, false)
        const sunrise = getLocaleTime(data.timeZone, data.sys.sunrise, false)
        const currentTime = getLocaleTime(data.timeZone, data.dt, false)

        let result
        if (currentTime >= sunrise && currentTime < sunset) {
            result = "DAY"
        } else {
            result = "NIGHT"
        }
        return result
    }
    return (<>
        <div className='card  flex h-40 w-full flex-col items-stretch overflow-hidden rounded-3xl bg-white p-4 shadow-lg dark:bg-neutral-800'>
            {loading ? "Please wait" :

                <div>
                    {/* {DynamicTitle(data) === "DAY" ? getLocaleTime(data.timezone, data.sys.sunset, true) :
                                getLocaleTime(data.timezone, data.sys.sunrise, true)} */}

                    {DynamicTitle(data) === "DAY" ?
                        <div className='flex flex-row gap-2 items-center'>
                            <BsSunriseFill />

                            <h3 className=' text-sm font-semibold'>
                                Sunrise
                            </h3></div>


                        : <div className='flex flex-row gap-2 items-center'>
                            <BsSunsetFill />

                            <h3 className=' text-sm font-semibold'>
                                Sun-Rise
                            </h3></div>}



                    <h3 className='mt-2 h-full'>
                        {DynamicTitle(data) === "DAY" ?
                            <h3 className='text-xs'>{getLocaleTime(data.timezone, data.sys.sunset, true)}</h3>
                            :
                            getLocaleTime(data.timezone, data.sys.sunrise, true)}
                    </h3>
                    <h3 className='text-xs'>
                        {DynamicTitle(data) === "DAY" ?

                            <div>Sunrise  {getLocaleTime(data.timezone, data.sys.sunrise, true)}</div>
                            :
                            <div>Sunset {getLocaleTime(data.timezone, data.sys.sunset, true)}</div>}

                    </h3>
                </div>}




        </div>
    </>
    )
}

export default Sunset