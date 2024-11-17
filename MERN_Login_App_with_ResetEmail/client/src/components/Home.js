import React from 'react';
import ve from '../assets/vit entrance.png';
import grav from '../assets/gravitas.jpg';
import sam from '../assets/sam.jpg';
import mess from '../assets/mess.jpg';
import '../styles/home.css';
import Header from './Header';
import Navigation from './Navigation';

const Home = () => {
  const container = () => (
    <div class="container">
      <div class="info-sections">
        <h2>Welcome Hostel Buddies! </h2>
        <br />
        <p class="section-text">This is your home away from home, the hostels at VIT is more than four
          walls and a roof. They have been designed to provide a comfortable, safe, inclusive and
          secure living even as they provide opportunities to form lasting friendships and ease the
          transition from home to college. Residential staff is always available to support the
          students from different backgrounds to promote community</p>
      </div>
      <br />
      <div class="container img">
        <img src={ve} alt="VIT Entrance" width="1500" height="600" style={{width: "100%", padding: '0'}} />
      </div>
      <div class="info-section">
        <h2 class="section-title">Dining</h2>
        <br />
        <p class="section-text">Healthy, wholesome food and a variety of dining options are available to the hostel
          students. Given the great diversity of tastes and cultures, students have access to multi-cuisine
          catering services that serve to suit vegetarian, non-vegetarian, and international palates.
          Students can also choose and order from a limited list of special dishes available on prior registration
          at the restaurant-style mess. Dining areas are open as early as 7:00 AM with night canteens available
          from 10:30 PM to 12:30 AM. The kitchens are hygienically operated and adhere to the prescribed food
          standards. A balanced menu is prepared every month by the Student Mess and Menu Committee in
          consultation with the hostel administrators.
          For those who want to try out different cuisines, a variety of hygienic food facilities are available on
          campus. A popular eating spot is the 600 square meters Food Court that serves delicious non-vegetarian
          and vegetarian food at reasonable prices. Fast food outlets are also attached to both the Men’s and
          Women’s Hostels.</p>
      </div>
      <div class="container img">
        <img src={mess} alt="VIT Entrance" width="1500" height="600" style={{width: "100%", padding: '0'}} />
      </div>

      <div class="info-section">
        <h2 class="section-title">Events</h2>
        <br />
        <p class="section-text">Diverse events are periodically organised within the hostels to help the residents
          unwind, network, exhibit their talents and volunteer with the communities they live and study. To name a
          few, weekend movie screenings, DJ nights, cultural and sports competitive events are made available for
          residents to have a memorable hostel life. There are regular visits to old age and children’s homes.
          Workshops on Self-Defence and special lectures are regularly hosted in the hostels.</p>
      </div>

      <div class="container img">
        <img src={sam} alt="VIT Entrance" width="1500" height="600" style={{width: "100%", padding: '0'}} />
      </div>

      <div class="container img">
        <img src={grav} alt="VIT Entrance" width="1500" height="600" style={{width: "100%", padding: '0'}} />
      </div>


      <div class="info-section">
        <h2 class="section-title">About Us</h2>
        <br />
        <p class="section-text">VIT was established with the aim of providing quality higher education on par with
          international standards. It persistently seeks and adopts innovative methods to improve the quality of
          higher education on a consistent basis.The campus has a cosmopolitan atmosphere with students from all
          corners of the globe. Experienced and learned teachers are strongly encouraged to nurture the students.
          The global standards set at VIT in the field of teaching and research spur us on in our relentless
          pursuit of excellence. In fact, it has become a way of life for us. The highly motivated youngsters on
          the campus are a constant source of pride. Our Memoranda of Understanding with various international
          universities are our major strength. They provide for an exchange of students and faculty and encourage
          joint research projects for the mutual benefit of these universities. Many of our students, who pursue
          their research projects in foreign universities, bring high quality to their work and esteem to India
          and have done us proud. With steady steps, we continue our march forward. We look forward to meeting you
          here at VIT.</p>
      </div>
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

export default Home;