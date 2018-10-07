import React, { Component } from 'react'
import './App.css'
import moment from 'moment-timezone'

class App extends Component {
  render() {
    const hour = Number(moment().format('HH'))
    let message = 'Buenas%20tardes'
    if (hour < 12) message = 'Buenos%20días'

    return (
      <form className="content" action={`https://wa.me/5216481217563?text=${message}`}>
        <img src="logo.jpg" className="logo" />
        <input type='submit' className='button' value='Ordenar por WhatsApp'/>
      </form>
    )
  }
}

export default App
