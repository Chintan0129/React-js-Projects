import './App.css';
import './index.css'
import React, {useState} from 'react'
import image from "./images/BMI.jpg"; 
function App() {
 
  // state
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
 
  let calcBmi = (event) => {
    //prevent submitting to the server
    event.preventDefault()
 
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))
 
      // Logic for message
 
      if (bmi < 25) {
        setMessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }
  }
 
 
  let reload = () => {
    window.location.reload()
  }
 
  return (
   <>
      <div style={{ backgroundImage:`url(${image})` ,opacity:0.8}}>
      <div className="app">
    <div className='container'>
      <h2 className='center'><b>BMI Calculator</b></h2>
      <form onSubmit={calcBmi}>
 
        <div style={{backgrcolor:"black",fontSize:"25px"}}>
          <label>Weight (lbs)</label>
          <input value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
 
        <div style={{backgrcolor:"black",fontSize:"25px"}}>
          <label>Height (in)</label>
          <input value={height} onChange={(event) => setHeight(event.target.value)} />
        </div>
 
        <div style={{backgrcolor:"black",fontSize:"25px"}}>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </div>
      </form>
 
      <div className='center'>
        <h3>Your BMI is: {bmi}</h3>
        <p>{message}</p>
      </div>
    </div>
    </div>
  </div>
  </>
  );
}
 
export default App;