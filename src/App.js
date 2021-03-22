import './App.css';
import React, { useState, useEffect } from 'react';
import LoadingMask from './components/LoadingMask';
import Hotel from './components/Hotel';
import Subscription from './components/Subscription';


const App = () => {

  const [ isLoadingHotels, setIsLoadingHotels] = useState(false)
  const [ hoteldata, setHotelData] = useState([])
  const [showForm, setShownForm] = useState(false)

  useEffect(() => {
    setIsLoadingHotels(true)
    fetch("api/hotels")
      .then(res => res.json())
      .then(data => setHotelData(data))
      .catch(err => setHotelData(null))
      .finally(() => setIsLoadingHotels(false))
  }, [])

  useEffect(() => {
    setTimeout(() => setShownForm(true), 10000)
  }, [])


  return (
    <div className="App">
      {
        isLoadingHotels && <LoadingMask />
      }
      {
        hoteldata ? 
        hoteldata.map(hotel => <Hotel key={hotel.name} name={hotel.name} city={hotel.city} stars={hotel.stars} />) : 
        <p>Oooooopppssss, something happened</p>
      }
      {
        showForm && <Subscription close={() => setShownForm(false)} />
      }
    </div>
  )
}

export default App
