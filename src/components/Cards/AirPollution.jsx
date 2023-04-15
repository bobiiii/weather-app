import React, { useEffect } from 'react'
import useAuth from '../../Context/useAuth'
import { GiAbstract053 } from "react-icons/gi"

function AirPollution() {
    const { AQI, loading, lat, setLat, long, setLong, data, setData } = useAuth()

    function describeAirQuality(aqi, showAdvice = false) {
        const Quality = {
            1: {
                description: "Good air quality",
                prevention: "Enjoy outdoor activities!",
            },
            2: {
                description: "Fair air quality",
                prevention:
                    "Limit prolonged outdoor exertion if you are sensitive to air pollution."
            },
            3: {
                description: "Moderate air quality",
                prevention: "Reduce prolonged or heavy exertion. Take more breaks, do less intense activities."
            },
            4: {
                description: "Poor air quality",
                prevention: "Avoid prolonged or heavy exertion. Move activities indoors or reschedule."
            },
            5: {

                description: "Very poor air quality",
                prevention: "Avoid all outdoor activities. Move activities indoors or reschedule.",
            }
        }

        if (Quality[aqi]) {
            if (showAdvice) {
                return Quality[aqi].prevention
            } else {
                return Quality[aqi].description

            }
        }
        else {
            return "Invalid Air Quality Index"
        }

    }

    return (<>
        {loading ? "Please wait " :

            <div className='card h-40 col-span-2 py-4'>
                <div className='flex flex-col items-stretch'>
                    <div className='flex flex-row gap-2 items-center'><GiAbstract053 />
                        <h3 className=' text-sm font-semibold'>Air Pollution</h3></div>
                    <div className='h-full'>
                        <h3 className='text-2xl mt-2 h-full'>
                            {describeAirQuality(AQI, false)}
                        </h3>


                        <input
                            type="range"
                            min="0"
                            max="5"
                            step="1"
                            value={AQI}
                            onChange={() => { }}
                            className="slider-thumb h-[10px] w-full appearance-none overflow-hidden rounded-md"
                            style={{
                                background:
                                    "linear-gradient(90deg, rgba(58,110,180,1) 0%, rgba(126,212,87,1) 20%, rgba(248,212,73,1) 40%, rgba(235,77,96,1) 60%, rgba(180,96,231,1) 80%, rgba(178,34,34,1) 100%)",
                            }}
                        />



                    </div>
                    <h4 className='text-xs'>
                        {describeAirQuality(AQI, true)}
                    </h4>
                </div>
            </div>
        }</>)
}

export default AirPollution