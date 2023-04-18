import React, { useState, useEffect } from 'react'
import "./App.css"
import Layout from "./components/Layout"
import axios from "axios"
import useAuth from './Context/useAuth'

function App() {
  const { loading, setLoading, setAQI, lat, setLat, long, setLong, data, setData } = useAuth()
  async function getLocation() {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })
      return { lat: position.coords.latitude, long: position.coords.longitude }
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    async function getData(params) {
      const { lat, long } = await getLocation()

      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=7a25049ebc49924131fffa4b1468e189`)
      const AQres = await axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=7a25049ebc49924131fffa4b1468e189`)
      setData(res.data)
      setAQI(AQres.data.list[0].main.aqi)
      setLoading(false)
    }

    getData()
    // console.log(lat)
    // console.log(long)
    // console.log("Latitude is:", lat)
    // console.log("Longitude is:", long)
  }, [lat, long]);



  return (
    <>
      <Layout />
    </ >
  )
}

export default App