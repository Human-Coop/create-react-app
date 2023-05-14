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
      rsvptoggle: setTogglecrawfishBoilRSVP,
      rsvpForm: "https://docs.google.com/forms/d/e/1FAIpQLScuV7-xgnQ-ytCvIVNLC2rEnZhBU63JP8zCAIM7Xk-rqL5ELA/viewform?embedded=true"
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
      picture: "https://lh3.googleusercontent.com/zFP6Za3y6Q4wJ827pyzo0JJxbKh2w0C8gbAyi0CDu2LfRhbGBJt48WQHSmbBDs6YBg8I9hjBlGJ6TIrFtWI5XYFDF-GcqJbiilFTg2iMXT6C2o6Qrz9i8BIP8fzo_AlQE5cSb-0VAgK2E-ucFK76wCUyPhOUG96U1crZpf-InZhDx1AIP27r0pkk430SQE2QswhVnABWb8o_YCvbTlnRuH-pxvajeasMMC4E2l2DaOymzHuSbCXl2dwRIfxcpf8I8XMlWUuRDDoLeoNTj36KYd9on-JpAfNyXuUPGlhfdhcBmV8PspjLoehMMnIfNkwwKnL8nQCdc4opYEnFKeqVBI7BX1A3jX99SHuKliXDIe74rTGBxbPcbmH0Cj8HCNaXg_SiIu-dviyMvfwpoYA6m6z9f100-mlow52KE5jr963LzitoI9laQ0Hd1Ms4lOd21IomvPi0NbIBFyi2vy1X_OQpH_o64jnswxiCH3iy9UUM9KMYGv3Jz6DzXhENOvae7dANkjWoUGycgGNjmMpFxiFUdBVzfxnszBKl0n9riupuMTYFL4iaWs_6QhUQJwePsd_iquww8_13UVFq8asnhv5sXuE-xII3q7xMtiG_Nk7KieYAohTm9X8QQIpvXVmKQEWrUchTa3jigDgbpVrxqDPlhk2afigPMtb6QCApqj_fJaprUgb6PgaXPwMFNVqo6l1fPI3Qx5t1X9touiZCHvOEhOFQl8LIGkUeM0mD3WOH1d2W2a2wc2XNgVjfSAgP7WfFP3mq108nCil1YqSZ3L0WJao6dtlk0bilBwRkqvdu7-Wanrj14YqciIgT1ivtDdqlH2McDMmkHqauxph2zmJRteHobbNlBVOrN_FWW0ozA4BANvhHexbzJqoQJUiemRP0-5SH-yVgUZ6HCNDBQfE57NOeBwMt5XlQVJLRtbbqaMaPuA=w730-h972-s-no?authuser=0",
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
      picture: "https://lh3.googleusercontent.com/UyThTl2Jn63yAQa_xy9MiPlAzTKjr_mAm_ALv1C6b4hhOHADDeYx0AihHKDwbTZAKjETvT5c2GNGZ4nEBhQmEU9BtSc3BF49NZOSRXCofdQG7ffSoUZgKlzRmF9MfCIUGC03yebYYZZXQB9AyxYqV_o5XMXvSd0yOjl1P5X__5uZo1iYXY9awpLnoWwp1hcn_x0HfUPWrOiqDlDD0lA8B8EHlJO2lddBj0Pts7XT3hSqqNbTTrEWvBNaWCQeoX5ZXjwUuPeb-IalGvut02TCobgo2lQzMQloatgGVbPp6U_HOf4ZmD5XYNOqGRD2IJetMB6Z4JP8eyyXPp_HCs4LFzx_9nqO0o_IqosRba7n4g9kfGklsR6i3Fz86kXOOdZ8L3q6AHpxH57CTYxls0bsgtG29Rh6scosaoRITr6AQuWIzc7QtozdDAba_ei8uGDPjFHPszCZ4sB6EUCkn5AU6aT05-hWN8k2nc12xQ18PnAYMVeYh-abM1pdnKOjp3BsrZ_UF-PVbRJ1vGP5vPtsREoamvNI4y2jWs-SaM-N1LTtywWPW7r_3eaMkYk164oWIfR_Ui9ZnsAmOHnNfRSuApEP7_Tq_xxnYFwVnjdX-WfPIsjdNB7Nykt-ubc8Pa-ONx1psbBDmEMPnWnG8h8vXecAa19xRi3yv34QVVS0B35q88R2bXYlvGUbzUI3KYpKw0LMK-vytlNNTm-BsJaRKDA1GPuhrL2FgKjwLDCR825HaVxWKddSMUcEcz7qxBz3ELwspTaBtZ9QwdWDgtzAOi-ffVDU1PLK_L7UNUbPZGzafvUEshVB-yMHwt6x3KHdpcqwHcbsR_Xn6Fw9XG4LcUeX4ealJCkWQ-S3R8aRactKB4Be_Pp04f_Gl9gzOJPXpSjMt7_bFrKlDKDG9EOPQtw8sjSszVAEH8XMQ2CI_hGakL1uGA=w360-h480-s-no?authuser=0",
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
      rsvptoggle: setTogglebagelBrunchRSVP,
      rsvpForm: "https://docs.google.com/forms/d/e/1FAIpQLSdM4WdWhYdb4F7O4SYwAbOlAq2DSiuX9GehkcwGsKyfIMBwnQ/viewform?embedded=true"
    }
  ];

  function getEvents() {
    return events;
  }

  function clickDetails(event){
    event.toggle(!event.state);
    event.rsvptoggle(false);
    return;
  }

  function clickForm(event){
    event.toggle(false);
    event.rsvptoggle(!event.rsvpState);
    return;
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
                <a onClick={() => clickDetails(event)} >Details</a>
                { event.rsvp && <Spacer /> }
                { event.rsvp && <a onClick={() => clickForm(event)} >RSVP</a> }
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
