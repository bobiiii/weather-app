import React, { createContext, useState } from 'react'


export const ContextPro = createContext()

function Context({ children }) {
    const [lat, setLat] = useState(40.7128);
    const [long, setLong] = useState(74.0060);
    const [data, setData] = useState({});
    const [AQI, setAQI] = useState(0);
    const [UVIndex, setUVIndex] = useState();
    const [loading, setLoading] = useState(true);
    const [prec, setPrec] = useState(0);
    const [pressure, setPressure] = useState(0);
    const [feelLike, setFeelLike] = useState(0);

    return (
        <ContextPro.Provider value={{ pressure, setPressure, feelLike, setFeelLike, prec, setPrec, UVIndex, setUVIndex, AQI, setAQI, loading, setLoading, lat, setLat, long, setLong, data, setData }}>
            {children}
        </ContextPro.Provider>
    )
}

export default Context



