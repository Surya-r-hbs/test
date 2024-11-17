import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import '../styles/wifi.css';

const Wifi = () => {
    return (
        <div>
            <Header />
            <Navigation />
            <div class="container">

                <h2>Wifi Login: </h2>
                <p><a href='http://phc.prontonetworks.com/cgi-bin/authlogin?URI=http://www.msftconnecttest.com/redirect'>Click here to Login</a> </p>
                <br />

                <h2>Wifi Complaints </h2>
                <p><a href="https://hostelwifi.vit.ac.in/index.php?a=add" >Click here to Lodge
                    any complaints
                    regarding Wi-Fi </a></p>
                <br />
                <h2>Wifi Renewal:</h2>
                <p><a href="https://hostelwifi.vit.ac.in/index.php?a=add&category=5" >Click here to renew Wi-Fi account </a>
                </p>
            </div>
        </div>
    )
}

export default Wifi