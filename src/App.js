import React from 'react';
import { useEffect, useState } from 'react';
import EventDetails from './subpage/EventDetails';
import EventForm from './subpage/EventForm';
import Spacer from './subpage/spacer';
import './App.css';

function App() {
  // const [ minutes, setMin] = useState(null);
  const [ countdown, setCountdown] = useState(null);
  const [togglecrawfishBoil, setTogglecrawfishBoil] = useState(false);
  const [togglecrawfishBoilRSVP, setTogglecrawfishBoilRSVP] = useState(false);
  const [toggleceremony, setToggleceremony] = useState(false);
  const [toggleceremonyRSVP, setToggleceremonyRSVP] = useState(false);

  const [togglereception, setTogglereception] = useState(false);
  const [togglereceptionRSVP, setTogglereceptionRSVP] = useState(false);
  const [togglelanternParade, setTogglelanternParade] = useState(false);
  const [togglebagelBrunch, setTogglebagelBrunch] = useState(false)
  const [togglebagelBrunchRSVP, setTogglebagelBrunchRSVP] = useState(false)

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
      rsvp: "https://docs.google.com/forms/d/e/1FAIpQLScuV7-xgnQ-ytCvIVNLC2rEnZhBU63JP8zCAIM7Xk-rqL5ELA/viewform",
      rsvpState: togglecrawfishBoilRSVP,
      rsvptoggle: setTogglecrawfishBoilRSVP
    },
    {
      name: "Wedding Ceremony",
      id: "ceremony",
      picture:"https://lh3.googleusercontent.com/fife/APg5EObEAzNbH-WgBy_tn2sGahll62LrutIzSQ1JnExGcGEccH4KoaT7MTF7rOPOENPSXTi7Pjf-PBKpKhJnqVvNxeDTkM9mxr_a1dMtjF43l-tkskpbQ2UxZTAyk2a771B7hWKf-k2LeDvdU7gQhU3qdZPF3eTW5_CGRt0zYeHkFYeR_TMJod-64IAXM6XIXEsjpBLeVqBXQ8aQIQoDM2s_RjXXsiaClOq6hVIsPq_c_h8590BmGR1R1hy0S3TYrS25CGX8lf8TX-FYkV0r1FmEVoK4xcKPg2WrJyjVAzNU2XHtIK8Rif71Xk720v-nJ71PiA6Orfqp2kc7mFG9280xDKEdcUkOLcBldO9nQccE6AO63qgTe7Z-83tuO0UWuASvOB8wVi8vPi49DFWQcLuyEzrIkHox_XizNVJ6EgbKM5xDBLuF6OiSkVAJt1inI6qiqGGovzxrZfzUVyJYHqOYQlFQUiGFoJdopxC7ImT98Q9CpOGlKSry0cqV2cVeUI2SYeUlMYM66coozMmDnqnGelGJkK7MfDlw0ahsa7XHe4YbcBSSSwMwnWDFn8GN-cnTwDO6sMjOcbLAtaYO18QAZEYW64PmA_6hgmNmJg4W9juGlp9KDTFaY0OUfzPi4SjL1K2HvsMNU-YLu9hzzYtNMCExcyUotW-OqyY01Tyy-0VJGUAJbzB13VZYIfAOS-IypKrB4UO4nsfUf5hNORotOFnH4Mj4MNfJ7ENjwIfq0mIA-mhxzndxuEG76e1OfOB3GPK5522Iy7B0_Ih0WYzImAti6sH5FEVxqyZ6dXCLgtRX5mDVn3baYmMNhVEyt4TBmVtrz3r58A9zOmXEpWyud16CbQcda-_8c9fkQMf78aE4oqxLs76w8KJ6fNsxgPlLfBSf8z4dIu7ycVjRFc5-jaa-KmlirdcEs_cZJ4lhe56cN2jN9-ChrimXLhAy-j6Nt7qzJ2K18Rd3b_vfH5Okj_W3tm7HCxCT1V4f5RigKnDkdx1ntSzLlJWijbxnnTpOlQWPrH0hhc1sE1YnvenTXQJkxmIxHDcdBCi2Gd7hzwzeipZfVnlsmDWYYdmMqZa-9YhmdN50X1sf3ijyvW2-rXKyaBpjEpUSSOwUVrr17avVDzbiVlZIUx72-spjEwtjkLLa2WzOxLlC3XnQp1nkK_6RjhuGIGoC-Ls0nWd3-4rrx_bDXQlnAWMYZHqJBi9WyaIdiCukHSHQcF3UQolz7nMx7FCywf6gFzGFd8zHITEnUprII6p7gNeCsRQOTPePB99wVomqKWNXer8M0R7yVIRr-08waNZYJOwhQokF8Knuk_FjsUjlCbKc5BX-zAifEBUP5IxTHWkzncadj-WHeEJgzWFlXGwR6Ihw-4P7nNgSipN5nclL_QFdyL0K1fk2fZ6uigJZuYIxsrL1jTtKnYA7lXQD2l9fH1QGQcvbcfCwdi6cAUTFLzuGdjysg7tZjW8LGn5kOAClm5QkpVGueoySeIL9sBfz1Deq2eI1Vr97ideAm1UQITztj3Njg7DSqTQ7t1I1mflh9a5ohS2kCJ0Tyd9W0-33FZGr3fPgtNQ5S_vNMGHGpTqb7uVRF5Y=w1280-h960-s-no?authuser=0",
      time: "5:00pm May 4th 2024",
      maplink: "href",
      location: "Beach",
      description: "A Beach Wedding Ceremony",
      toggle: setToggleceremony,
      state: toggleceremony,
      rsvp: "href",
      rsvpState: toggleceremonyRSVP,
      rsvptoggle: setToggleceremonyRSVP,
      rsvpForm: "https://docs.google.com/forms/d/e/1FAIpQLSdhbk3GYbtFOooTTrS4u9GypjCTUc5jcDNQavfM-6Yt6x07Zg/viewform?embedded=true"
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
      rsvp: "href",
      rsvpState: togglereceptionRSVP,
      rsvptoggle: setTogglereceptionRSVP,
      rsvpForm: "https://docs.google.com/forms/d/e/1FAIpQLSc77ffeLjR4-9WjkI0409iNJzsyEnQPrdfa0CpRH3UFXzG-TA/viewform?embedded=true"
    },
    {
      name: "Lantern Parade / After Party",
      id: "lanternParade",
      picture:"https://lh3.googleusercontent.com/7hbG9m6CQ1u110uwbckSMJ-7ejxtMTMT1NssEfJ22TejdLuqeqM0yKl6-_cFrURPpVMc-Y_K2vZpBWom45VVU9PD5p4Q-UVSeD5rSSd7iFVNvS0rdOMxEzrS1pMG30z1DWhATMn0j-EjFUrzRu0U2SOBLlnOQT8-tSJC2gLPDMZtY6wwR_FJKZydtFQLcxMNtQkya09Ab8rpBfEYTI4RrcV5NYhtkUQ6Hq9wg3tuWffBagmOFSQXoVGu2mtrsawO6f4gsHMMuLB1rK0ByTwwD9N_r87tEkfAQomzGzB6ixlTXWRV14dHXYmyJvkI79SeOyeRCcD5dfKrhLVFeS9yozjD5Xuhhuji_Eb_IavtpN8b0jhOJarMHGJebCxKnmEjPaNupRf_nWydSgYmcjV5oXY15Daa3GeNJkgy3VVKEZ9rsgi3cBsZ-3G3oNHkv5DwSU7iRu5HGp7-Nl1nrM7ffjmdSqzjUUkyKIKc-WBh0E6Eb3hR9Kgp7DvodqHanjxyaPfz_a72nW9TtEk9yyd7-c-Q8Dz368_SiI-pNvy_-kYeMB8RuHAiakgEKIKgwPJpkDV9Tb7FuA3VxhkLg90x3u8MNMRbWFx84JWSlssWiJ80xKw002y8oJa7p3kw_mqw5eNuV93hYxYjzDFYv7I6B6PtoOzn5Nja8zeYhO6zmgTe95lwvPFKqqlH4CuywMckJLHLbqVfBPBMMKoKchgSFaKmigdYpmdUd1XbzsWalnHA_Jz3dk39NTOz4EwMdHx5sgIcWZ7qv1lqvVE4Nyf5-ELoCLvg4p42pitVUbMpi8NcSWC_-Fd9P7hR3emsCxcgfJo0LTnI8-tqUfp1nsZcPsP4BV5FeSafhcgUVHp4_gaokzzsyr9vHHnJYjZvNvXMfK5tOm1b-zMswRVYt4BWrDRvFzPjPO110PrC6RABTKtpSym5nQ=w360-h480-s-no?authuser=0",
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
      rsvp: "href",
      rsvpState: togglebagelBrunchRSVP,
      rsvptoggle: setTogglebagelBrunchRSVP
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
                { event.rsvp && <a onClick={() => event.rsvpToggle(!event.rsvpState)} >RSVP</a> }
                { event.state && <EventDetails event={event} />}
                { event.rsvpState && <EventForm event={event} />}
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
