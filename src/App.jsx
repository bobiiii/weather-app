import React, { useState, useEffect } from 'react'
import "./App.css"
import Layout from "./components/Layout"
import axios from "axios"
import useAuth from './Context/useAuth'

function App() {
  const { loading, setLoading, setAQI, lat, setLat, long, setLong, data, setData } = useAuth()
  useEffect(() => {
    async function getData(params) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        },

        function (failure) {
          if (failure.message.indexOf("Only secure origins are allowed") == 0) {
            alert('Only secure origins are allowed by your browser.');
          }
        }

      );

      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=7a25049ebc49924131fffa4b1468e189`)
      const AQres = await axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=7a25049ebc49924131fffa4b1468e189`)
      setData(res.data)
      setAQI(AQres.data.list[0].main.aqi)
      setLoading(false)
    }

    getData()
    console.log(lat)
    console.log(long)
    console.log("Latitude is:", lat)
    console.log("Longitude is:", long)
  }, [lat, long]);



  return (
    <>
      <Layout />
    </ >
  )
}

export default App