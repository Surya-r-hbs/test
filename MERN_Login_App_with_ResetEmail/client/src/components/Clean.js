import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import '../styles/clean.css'
import { useData } from '../store/store'

const Clean = () => {

    const data = useData(state => state.person)

    const main = () => (
        <div class="main">
            <div class="icon-container">
                <i class="fas fa-broom"></i> Remaining Cleanings:
            </div>
            <div class="room-number">Room Number: {localStorage.getItem('block')} {localStorage.getItem('room')}</div>
            <form action="/clean" method="post">
                <div class="section over-hide z-bigger">
                    <input class="checkbox" type="checkbox" name="general" id="general" />
                    <div class="background-color"></div>
                    <div class="section over-hide z-bigger">
                        <div class="container pb-5">
                            <div class="row justify-content-center pb-5">
                                <div class="col-12 pt-5">
                                    <p class="mb-4 pb-2">Cleaning Option <i class='uil uil-chat-bubble-user'></i> </p>
                                </div>
                                <div class="col-12 pb-5">
                                    <input name="cleaning_option" class="cleaning_option" type="radio" id="broom"
                                        value="broom" checked required />
                                    <label for="broom">
                                        <i class='uil uil-water-drop-slash'></i>
                                        Broom
                                    </label>
                                    <input name="cleaning_option" class="cleaning_option" type="radio" id="mop" value="mop" required />
                                    <label for="mop">
                                        <i class='uil uil-water'></i>
                                        Mop
                                    </label>
                                    <input name="cleaning_option" class="cleaning_option" type="radio" id="both" value="both" required />
                                    <label for="both">
                                        <i class='uil uil-layer-group'></i>
                                        Both
                                    </label>
                                </div>
                                <div class="col-12 pt-1">
                                    <p class="mb-4 pb-2">Select Time for Cleaning <i class='uil uil-clock'></i> </p>
                                </div>
                                <div class="col-xl-10 pb-5">
                                    <input type="radio" name="time_for_cleaning" id="time_1030" value="10:30 AM"
                                        required class="time_for_cleaning" checked />
                                    <label for="time_1030">
                                        10:30 AM
                                    </label>

                                    <input type="radio" name="time_for_cleaning" id="time_1130" value="11:30 AM"
                                        required class="time_for_cleaning" />
                                    <label for="time_1130">
                                        11:30 AM
                                    </label>

                                    <input type="radio" name="time_for_cleaning" id="time_1230" value="12:30 PM"
                                        required class="time_for_cleaning" />
                                    <label for="time_1230">
                                        12:30 PM
                                    </label>

                                    <input type="radio" name="time_for_cleaning" id="time_1330" value="01:30 PM"
                                        required class="time_for_cleaning" />
                                    <label for="time_1330">
                                        01:30 PM
                                    </label>

                                    <input type="radio" name="time_for_cleaning" id="time_1430" value="02:30 PM"
                                        required class="time_for_cleaning" />
                                    <label for="time_1430">
                                        02:30 PM
                                    </label>

                                    <input type="radio" name="time_for_cleaning" id="time_1530" value="03:30 PM"
                                        required class="time_for_cleaning" />
                                    <label for="time_1530">
                                        03:30 PM
                                    </label>

                                    <input type="radio" name="time_for_cleaning" id="time_1630" value="04:30 PM"
                                        required class="time_for_cleaning" />
                                    <label for="time_1630">
                                        04:30 PM
                                    </label>

                                    <input type="radio" name="time_for_cleaning" id="time_1730" value="05:30 PM"
                                        required class="time_for_cleaning" />
                                    <label for="time_1730">
                                        05:30 PM
                                    </label>

                                    <input type="radio" name="time_for_cleaning" id="time_1830" value="06:30 PM"
                                        required class="time_for_cleaning" />
                                    <label for="time_1830">
                                        06:30 PM
                                    </label>

                                    <input type="radio" name="time_for_cleaning" id="time_1930" value="07:30 PM"
                                        required class="time_for_cleaning" />
                                    <label for="time_1930">
                                        07:30 PM
                                    </label>

                                </div>
                                <input type="submit" class="btn-primary" value="Clean" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )

    return (
        <div>
            <Header />
            <Navigation />
            {main()}
        </div>
    )
}

export default Clean