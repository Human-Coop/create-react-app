import React from 'react';
import { useEffect, useState } from 'react';
import EventDetails from './subpage/EventDetails';
import Spacer from './subpage/spacer';
import './App.css';

function App() {
  // const [ minutes, setMin] = useState(null);
  const [ countdown, setCountdown] = useState(null);
  const [togglecrawfishBoil, setTogglecrawfishBoil] = useState(false);
  const [toggleceremony, setToggleceremony] = useState(false);
  const [togglereception, setTogglereception] = useState(false);
  const [togglelanternParade, setTogglelanternParade] = useState(false);
  const [togglebagelBrunch, setTogglebagelBrunch] = useState(false)

  let events = [
    {
      name: "Crawfish Boil",
      id: "crawfishBoil",
      picture:"https://www.cajungrocer.com/image/cache/wp/gj/articles/Live-Crawfish-1140x800.webp",
      time: "6:00pm May 3rd 2024",
      maplink: "https://www.google.com/maps/dir//Eagle+Cottages+at+Gulf+State+Park,+1+Bald+Eagle+Lane,+Gulf+Shores,+AL+36542/@30.2663425,-87.6659432,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x889a058b1438f8dd:0x51a40a2c356d042a!2m2!1d-87.6659432!2d30.2663425!3e0",
      location: "Eagle Cottages",
      description: "Attire: You will be eating seafood with your hands. \n\n"+
      "This event will be outdoors. There will be some available seating but feel free to bring your own beach chairs if you have 'em.",
      toggle: setTogglecrawfishBoil,
      state: togglecrawfishBoil,
      rsvp: "https://docs.google.com/forms/d/e/1FAIpQLScuV7-xgnQ-ytCvIVNLC2rEnZhBU63JP8zCAIM7Xk-rqL5ELA/viewform"
    },
    {
      name: "Wedding Ceremony",
      id: "ceremony",
      picture:"/path",
      time: "5:00pm May 4th 2024",
      maplink: "href",
      location: "Beach",
      description: "A Beach Wedding Ceremony",
      toggle: setToggleceremony,
      state: toggleceremony,
      rsvp: "href"
    },
    {
      name: "Reception",
      id: "reception",
      picture:"https://lh3.googleusercontent.com/CuAoL8CdGPZYGCddYnsl3eJD-hf-nqLBn5lNmimAtyxq58JWyAfhzILJUDnEUuEUyrBbUqtdVGTllQ_zpoUmCF9wor6dcRPGl8K4CieXkNE6-bMsnRkstPLumZITUD0hI0sM8L0-sr-I7QPhSndvmnUQdRTVOUCUm9Z1KL3FdbnRAs2-TWQgbzcPw2W-UCz-_avhmHS8DpAA8EjTMOgqZ9YQKfkyoCqBJhRb-4l8FyZHF5SLNh8Pz7VNsECyIWgZQ-TzyE1y-sSyFJVcSt1-M2PeWsa0nHOjwtobK0_eL5oXc_UBWoD4yCyJZeE8XAr_4ItfhZR97dbNepNsyKUDAafg5G_USUMvTbbvV3rAIhIArwZlsG2EoAFOg-1tnh5J2o9aC6nXKT1FDhqwLBcRVeGaOj-NSLDn0svti6zSaUQnIVtP1RQB7H7IHLwjRPahlaAcTQfGXeaGNxDZohxC94ctQim4au3geFqUll9P68Xv-2mJGkQiPRGRsELWwqopdE_M6vHAw9wAvqklWICPDfaDzYtmORHJJsM7vZmiHzmg-9CMMTByhSsu_jitezA3mZA_UPg_nj7_xQK12vmOqQgdbfRjD2xBpQ1g4o_9aB2ZavPqVF1vkjzpNQEyV3zd9vh60M5I5sLUyb4ovNPwRTDxWdQTUGmKCZ19ZRBKTQ8AJCc7hOmPI4sTGo8RnnX3ePN0gl9_rtsaiOAm1bQp44YQiYEMN3fFXU1I5E0z72zX1KmsVAPMJgi_KoKHpN4DmJwFz-PqSRrxRw4cWuXfedpsminfVbOaDeCJ1TqUIkZc0_6Q_gvRusatb8CrH_jkzATGG7P_gBwRBkD-idtqNhFnmtWn0u-dnIJYpjKqOMw0TJjXL7ChD-zLjH8bWU4R0b_9wkevgpptS_TjzywnbWtLNqYcx7IipaC6dLKVe7gMjb7hbw=w730-h972-s-no?authuser=0",
      time: "7:00pm May 4th 2024",
      maplink: "href",
      location: "Activities Center",
      description: "A reception with food, drinks, & dancing",
      toggle: setTogglereception,
      state: togglereception,
      rsvp: "href"
    },
    {
      name: "Lantern Parade / After Party",
      id: "lanternParade",
      picture:"/path",
      time: "11:00pm May 4th 2024",
      maplink: "href",
      location: "State Park Cabins",
      description: "An parade from the activities center to the State Park Cabins for the after party bonfire",
      toggle: setTogglelanternParade,
      state: togglelanternParade,
    },
    {
      name: "Bagel Brunch",
      id: "bagelBrunch",
      picture:"/path",
      time: "10:00am May 5th 2024",
      maplink: "href",
      location: "State Park Cabins",
      description: "A bagel brunch",
      toggle: setTogglebagelBrunch,
      state: togglebagelBrunch,
      rsvp: "href"
    }
  ];

  function getEvents() {
    return events;
  }

  useEffect(() => {
    async function getCountdown() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setCountdown(newDate);
    }
    getCountdown();
  }, []);

  return (
    <main>
      <h1>Alex &#38; Regina</h1>
      <h3>
        Wedding Events
      </h3>
      <ul>
        {getEvents().map((event,index)=>{
            return <li key={index}>{event.name}&nbsp; 
                <a onClick={() => event.toggle(!event.state)} >Details</a>
                { event.rsvp && <Spacer /> }
                { event.rsvp && <a href={event.rsvp}>RSVP</a> }
                { event.state && <EventDetails event={event} />}
              </li>})}
      </ul>
      <br />
      <h3>
        Sleeping Accomodation Suggestions
      </h3>
      <ul>
        <li>State Park Cabins <a>Book</a></li>
        <li>State Park Hotel <a>Book</a></li>
        <li>Stake Park Primitive camping <a>Book</a></li>
        <li>Stake Park RV camping <a>Book</a></li>
        <li>Nearby airbnbs <a>Book</a></li>
      </ul>
      <br />
      <h2>Countdown:</h2>
      <h3>{countdown ? countdown : 'Loading date...'}</h3>
    </main>
  );
}

export default App;
