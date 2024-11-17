import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import '../styles/emergency.css';

const Emergency = () => {

    const container = () => (
        <div class="container">


            <h3>Hostel contact info</h3>
            <p><a href="https://vit.ac.in/campuslife/hostels">VIT Hostels</a></p>



            <br />
            <h3>Health care services</h3>
            <p><a href="https://vit.ac.in/vit-care">Hospital</a></p>


            <br />

            <h3>Police contact info</h3>
            <p><a href="tel:081720 42111">Click to dial: 081720 42111 </a></p>


        </div>
    )
    return (
        <div className='others'>
            <Header />
            <Navigation />
            {container()}
        </div>
    )
}

export default Emergency