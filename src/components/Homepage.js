import React, { useContext } from 'react'
import { DataStore } from '../DataStore'
import Card from './Card';
import Header from './Header'

export default function Homepage() {

  const {allCities, setAllCities} = useContext(DataStore);

  return (
    <div className="homepage">
        <Header/>
        <div style={{minHeight:"40vh"}} className="container d-flex flex-wrap justify-content-center align-items-center">
        {
          allCities.map(city => {
            return <Card
            key = {city._id}
            name = {city.cityName}

            />
          })
        }
        </div>
       

    </div>
  )
}
