import '../components/FlightEstimator.css';
import { useState } from 'react'
import Navbar from '../components/Navbar';
import { Select, MenuItem, InputLabel } from '@material-ui/core';
import axios from 'axios'

function PredictorPage() {
  const [dep_time, setDepTime] = useState('')
  const [arrival_time, setArrivalTime] = useState('')
  const [source, setSource] = useState('select source')
  const [destination, setDestination] = useState('select destination')
  const [airline, setAirline] = useState('select airline')
  const [stops, setStops] = useState('0')
  const [cabin_class, setCabinClass] = useState('select cabin_class')
  const handleSubmit = (e) => {
    e.preventDefault()
    const params = {dep_time, arrival_time, source,  destination, airline , stops, cabin_class }
    console.log(params)
    axios
      .post('http://localhost:8000/predict', params)
      .then((res) => {
        const data = res.data.data
        const msg = `The Estimated Flight Price from ${source} to ${destination} is: ${data.prediction}`
        alert(msg)
        reset()
      })
      .catch((error) => alert(`Error: ${error.message}`))
  }

  const reset = () => {
    setDestination('select destination')
    setDepTime('')
    setArrivalTime('')
    setSource('select source')
    setAirline('select airline')
    setStops('0')
    setCabinClass('select cabin_class')
  }

  return (
    <>
      <Navbar />
      <div className="body">
        <div className="glass">
          <form onSubmit={(e) => handleSubmit(e)} className="glass__form">
            <h4>Estimated Flight Price Indicator</h4>
            <div className="glass__form__group">
              <InputLabel className='label'>Select Departure Time</InputLabel>
              <input
                id="dept_time"
                className="glass__form__input"
                required
                type="datetime-local"
                value={dep_time}
                onChange={(e) => setDepTime(e.target.value)}
              />
            </div>

            <div className="glass__form__group">
              <InputLabel>Select Arrival Time</InputLabel>
              <input
                id="arrival_time"
                title='Arrival Date'
                className="glass__form__input"
                required
                type="datetime-local"
                value={arrival_time}
                onChange={(e) => setArrivalTime(e.target.value)}
              />
            </div>

            <div className="glass__form__group">
              <InputLabel>Source</InputLabel>
              <Select 
                id="source"
                value={source}
                required
                onChange={(e) => setSource(e.target.value)}>
                  <MenuItem value="select source">Select Source</MenuItem>
                  <MenuItem value="Delhi">Delhi</MenuItem>
                  <MenuItem value="Kolkata">Kolkata</MenuItem>
                  <MenuItem value="Mumbai">Mumbai</MenuItem>
                  <MenuItem value="Chennai">Chennai</MenuItem>
              </Select>
            </div>

            <div className="glass__form__group">
              <InputLabel>Destination</InputLabel>
              <Select id="destination" value={destination} onChange={(e) => setDestination(e.target.value)}>
                <MenuItem value="select destination">Select Destination</MenuItem>
                <MenuItem value="Cochin">Cochin</MenuItem>
                <MenuItem value="Delhi">Delhi</MenuItem>
                <MenuItem value="New Delhi">New Delhi</MenuItem>
                <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                <MenuItem value="Kolkata">Kolkata</MenuItem>
                <MenuItem value="Banglore">Banglore</MenuItem>
              </Select>
            </div>

            <div className="glass__form__group">
              <InputLabel>No. of Stops</InputLabel>
              <Select id="stops" value={stops} onChange={(e) => setStops(e.target.value)}>
                <MenuItem value="0">Non-Stop</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
              </Select>
            </div>

            <div className="glass__form__group">
              <InputLabel>Airlines</InputLabel>
              <Select id="airline" value={airline} onChange={(e) => setAirline(e.target.value)}>
                <MenuItem value="select airline">Select Airline</MenuItem>
                <MenuItem value="Jet Airways">Jet Airways</MenuItem>
                <MenuItem value="IndiGo">IndiGo</MenuItem>
                <MenuItem value="Air India">Air India</MenuItem>
                <MenuItem value="Multiple carriers">Multiple carriers</MenuItem>
                <MenuItem value="SpiceJet">SpiceJet</MenuItem>
                <MenuItem value="Vistara">Vistara</MenuItem>
                <MenuItem value="Air Asia">Air Asia</MenuItem>
                <MenuItem value="GoAir">GoAir</MenuItem>
                <MenuItem value="Trujet">Trujet</MenuItem>
              </Select>
            </div>

            <div className="glass__form__group">
              <InputLabel>Cabin Class</InputLabel>
              <Select id="cabin_class" value={cabin_class} onChange={(e) => setCabinClass(e.target.value)}>
                <MenuItem value="select cabin_class">Select Cabin Class</MenuItem>
                <MenuItem value="Economy">Economy</MenuItem>
                <MenuItem value="Premium Economy">Premium Economy</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
              </Select>
            </div>


            <div className="glass__form__group">
              <button type="submit" className="glass__form__btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PredictorPage