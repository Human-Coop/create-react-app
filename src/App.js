import React from 'react';
import { useEffect, useState } from 'react';
import EventDetails from './subpage/EventDetails';
import EventForm from './subpage/EventForm';
import BookingInfo from './subpage/BookingInfo';
import Spacer from './subpage/spacer';
import './App.css';

function App() {
  // const [ minutes, setMin] = useState(null);
  const [ countdown, setCountdown] = useState(null);
  const [togglecrawfishBoil, setTogglecrawfishBoil] = useState(false);
  const [togglecrawfishBoilRSVP, setTogglecrawfishBoilRSVP] = useState(false);
  const [toggledinner, setToggledinner] = useState(false);
  const [toggledinnerRSVP, setToggledinnerRSVP] = useState(false);
  const [toggleceremony, setToggleceremony] = useState(false);
  const [toggleceremonyRSVP, setToggleceremonyRSVP] = useState(false);
  const [togglereception, setTogglereception] = useState(false);
  const [togglereceptionRSVP, setTogglereceptionRSVP] = useState(false);
  const [togglelanternParade, setTogglelanternParade] = useState(false);
  const [togglebagelBrunch, setTogglebagelBrunch] = useState(false);
  const [togglebagelBrunchRSVP, setTogglebagelBrunchRSVP] = useState(false);

  const [toggleCabinInfo, setToggleCabinInfo] = useState(false);
  const [toggleHotelInfo, setToggleHotelInfo] = useState(false);
  const [togglePrimInfo, setTogglePrimInfo] = useState(false);
  const [toggleRVInfo, setToggleRVInfo] = useState(false);
  const [toggleBnBInfo, setToggleBnBInfo] = useState(false);
  const [toggleLakeCabinInfo, setToggleLakeCabinInfo] = useState(false);
  const [toggleEagleCabinInfo, setToggleEagleCabinInfo] = useState(false);

  let events = [
    {
      name: "Crawfish Boil",
      id: "crawfishBoil",
      picture:"https://lh3.googleusercontent.com/pw/AJFCJaVRfL1-aY4cUF9gcO0rX-AUmN-b_L-TMADTW0j5dUkrHtTfdN7nvV6MztD72T28rR_2EIoeD1cJnLoHT40DHeXa9LzSO8N5hPfL_wKcM41GOCPvwog4D4oogqK2-L7yxZBo8S6zh8FqGBlAhkvDcUkN=w300-h200-s-no?authuser=0",
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
      name: "Picnic Dinner",
      id: "dinner",
      picture: "https://lh3.googleusercontent.com/pw/AJFCJaXpGzgisKIGrXipFGEsGxCU1OmccA8LtjMIfZcjkJviV5u6ZoV-3jA_YliNcok3_k_HKmJA2K1iDV6r2OgStjLLNnqI9Qda9MWKt8es1N6-avphppDyB2GjChJuEAYz8i-toGgD3QrdGWr4DU4fLrTy=w1348-h1798-s-no?authuser=0",
      time: "5:00pm May 4th 2024",
      maplink: "https://www.google.com/maps/place/Beach+Pavilion,+Gulf+Shores,+AL+36542/@30.2547154,-87.6458773,17z/data=!3m1!4b1!4m20!1m13!4m12!1m4!2m2!1d-90.0653353!2d29.9855988!4e1!1m6!1m2!1s0x889a04421f14e28d:0x3ef4a41149165c79!2sBeach+Pavilion,+Gulf+Shores,+AL+36542!2m2!1d-87.6433024!2d30.2547108!3m5!1s0x889a04421f14e28d:0x3ef4a41149165c79!8m2!3d30.2547108!4d-87.6433024!16s%2Fg%2F11c0rvzkhv?entry=ttu",
      location: "Beach Pavillion",
      description: "We will be serving dinner at the beach pavillion \n"+
      "before our ceremony. Due to state park regulations, non-alcoholic drinks will be served. \n"+
      "Don't worry we'll celebrate with drinks at the reception, we just wanted everyone to enjoy the view with dinner! \n",
      toggle: setToggledinner,
      state: toggledinner,
      rsvp: "href",
      rsvpState: toggledinnerRSVP,
      rsvptoggle: setToggledinnerRSVP,
      rsvpForm: "https://docs.google.com/forms/d/e/1FAIpQLScrGSfyP9-hyHvS9F2lT77PBhZ5PpPLY9iywJ1TR2S8-ErYog/viewform?embedded=true"
    },
    {
      name: "Wedding Ceremony",
      id: "ceremony",
      picture: "https://lh3.googleusercontent.com/ERxA92oLks3BaLdRmCsbOFjbl6VnVePLFyfizFvOPoWpqj9XUmQI_-xl_0fduiNUa_gaB6iDfcyRyOzJ7mRek7p2_YVqVeqsFmdRMCunkNG0aOY8l2pNZiuG_nOjCmXXCHSdJNP3SQ7ajQtnZhhCQHrJ3LGSfLwR5QfLWuakeBHABsiUzV1AD7VF9JHjGxKXCZ6Pbnk_lBgWtVWr44UWWrGhkYPo-VBjJUruf6co86ZGhyr6Umi9cj2teuULV0IwqBdGa8zmvOkk_EHHzVHLYtTaoeAY3ztEo8zfRl8WVxb0O0FDqElrqNqODNGhEPVb50Ub3mLfrhLi_vHwetOiRWYcP2QmwAhNk5CL3Yn99Mc0hoHJRqMiJVb02ja1xzQ7skBgLUF0-PsSvYxZpF2v_B6EzDVWBLNQEiKTPz68F3msEbtZAginshU4Zha-CYQnE8ehVGHGPlkCFKNjWWFLUHP1hqhO3m35G5hvQd2FedrYxDSt2xzaOd2hR6GAvxp91KKyMjAyc44DVPBN7UxgZDQIrRp8mf292IDvH4oyyqQAyCuPu5aVKkNk-FyPwVuXGXfcyzvivezKt6SyTCLtICJcwgqymyUrInMTfdkseTyXlwq4fM-Xl7oesPl0geV2KVKJPtUglCUmGnkKn8aEWm1XJ6hGY4uWfGkE2rXBnfmSIVifa19i223IChPv41mEEKwt4xq3mPxUTRXal6_CjzwNoB2MFV_S5LUQfElbtG4-v9h4pMTCvJbqgLuyWioJItXXiMTyyuwvi9O_qoNJ-TpRur2H5wVG0F3geu2y5M6uLosbRCvmjRuntOvCwSU6tIVq0lA0gIrp1-oczqUAJG5J0EBJTP2rQedx0t94T43K61jpPLSy06iemKTa98l9l_XNUZvKYsD0Z7ofFhJpPIDV1u4hKwDNXUCLzB74ytX40n1ymTNPXwOATLMJJbzP5BiKInHe-ndM-QivMH3j4Tce9zWZUdSSxvjX_MRKaUE=w958-h719-no?authuser=0",
      time: "6:00pm May 4th 2024",
      maplink: "https://www.google.com/maps/place/Beach+Pavilion,+Gulf+Shores,+AL+36542/@30.2547154,-87.6458773,17z/data=!3m1!4b1!4m20!1m13!4m12!1m4!2m2!1d-90.0653353!2d29.9855988!4e1!1m6!1m2!1s0x889a04421f14e28d:0x3ef4a41149165c79!2sBeach+Pavilion,+Gulf+Shores,+AL+36542!2m2!1d-87.6433024!2d30.2547108!3m5!1s0x889a04421f14e28d:0x3ef4a41149165c79!8m2!3d30.2547108!4d-87.6433024!16s%2Fg%2F11c0rvzkhv?entry=ttu",
      location: "Beach Pavillion Access",
      description: "Attire: We trust you to wear whatever \n"+
      "combination of festive and comfortable that makes you feel your best. Fancy shorts, short sleeves, \n"+
      "sport sandals/flip flops, and sunhats are practical choices for all genders! \n"+
      "Join us for a short beachside ceremony. Parking passes will be provided. \n"+
      "If you are travelling to Gulf Shores by car, we ask you to consider bringing your own beach chair or blanket. \n" +
      "We are happy to provide seating for anyone who cannot bring their own. \n",
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
      picture: 'https://lh3.googleusercontent.com/vU8pwCAF27qjPUodaMlF_lNUuXT_uXWutLEaCgmGUqKydxrnSk14ZErPm4mnd0SoZ3iUHqUFYQk7UdOfHiBbncZeXTl4CgwCzAj7XTBXEupIHcltPviVBk7pjg5VBxEps3mJdrw_I0qvV_P0mP6lbw7irQ0jEYTk-eExOCpiZhXN-s7yQfLDS4RM4_ezmmjTHcLGwR3lgMp40jH_k9rK7JMc5R9G6bGQBOp1twKrQskQiuqtMIGl7it2vFWWpPBPmRdXKfOn7EtEVzIFfClhVEEgtLiL6vpgr-c2iXcNL_yLZkER3I2qbBs8uuheP3vCexoMOEhdftgTG15eQaPDVMJa0hK1xg8TcCTNXzOWA3ac7sU3LXcj0_uqwQoLQm5eEw0jgZejowE1xgL64komFTWKUukkoTeAr5NyabZCVuvHjmybpaIybuJ4jdvyVZPS_O8wBjpw5XgysFSO3MOfzWgvv8aE8Et85Qr24efxZPjGglvS7MbUWKo1UKuwYW5UGQjLKtuEdI_BJEtr8oUXuI5kOKqXVDOH6fO7ENzqXTBnB0uE3dCGHhcbwz54yl9_Kgv7gq7L6n73aSljvMk_POR318Hks4aAGijbj-0IVV-5p-k0z0QZ4n301JkMOiKjqHU06c2NeNk0RPcUHDvSWx-VvKnUYT8Udv6F8Ey08CfL7xrx5uvXVczyomLq57kvqc50hWOhlq94umi_3r18JaM_Q8oSY-mqhWonNEno5lNDQxUNsKsPzh1a8Xyz6XNCSl4yp3LGnK8xq9SMOZfP12sRTRsECWRjpTkwZ2R9kBOLvfLRVtSa2CgIG4aleltE2wapGYw3Y5fXQOd-A0D92NR4j08B0DsP4VJc0wijapyYXWuk6OphJ8PGxJnjmRrFXlD1qezW0yQIDie_hDHFvfwHGism-SRnwEd05yQdVz9qeBfTPbdnqEzUL9MBjXa6l_17V3GorPyxRPQZNorEqYaV_t1bmE31YE5YnJI8Ncc=w506-h674-no?authuser=0"), url("https://lh3.googleusercontent.com/vU8pwCAF27qjPUodaMlF_lNUuXT_uXWutLEaCgmGUqKydxrnSk14ZErPm4mnd0SoZ3iUHqUFYQk7UdOfHiBbncZeXTl4CgwCzAj7XTBXEupIHcltPviVBk7pjg5VBxEps3mJdrw_I0qvV_P0mP6lbw7irQ0jEYTk-eExOCpiZhXN-s7yQfLDS4RM4_ezmmjTHcLGwR3lgMp40jH_k9rK7JMc5R9G6bGQBOp1twKrQskQiuqtMIGl7it2vFWWpPBPmRdXKfOn7EtEVzIFfClhVEEgtLiL6vpgr-c2iXcNL_yLZkER3I2qbBs8uuheP3vCexoMOEhdftgTG15eQaPDVMJa0hK1xg8TcCTNXzOWA3ac7sU3LXcj0_uqwQoLQm5eEw0jgZejowE1xgL64komFTWKUukkoTeAr5NyabZCVuvHjmybpaIybuJ4jdvyVZPS_O8wBjpw5XgysFSO3MOfzWgvv8aE8Et85Qr24efxZPjGglvS7MbUWKo1UKuwYW5UGQjLKtuEdI_BJEtr8oUXuI5kOKqXVDOH6fO7ENzqXTBnB0uE3dCGHhcbwz54yl9_Kgv7gq7L6n73aSljvMk_POR318Hks4aAGijbj-0IVV-5p-k0z0QZ4n301JkMOiKjqHU06c2NeNk0RPcUHDvSWx-VvKnUYT8Udv6F8Ey08CfL7xrx5uvXVczyomLq57kvqc50hWOhlq94umi_3r18JaM_Q8oSY-mqhWonNEno5lNDQxUNsKsPzh1a8Xyz6XNCSl4yp3LGnK8xq9SMOZfP12sRTRsECWRjpTkwZ2R9kBOLvfLRVtSa2CgIG4aleltE2wapGYw3Y5fXQOd-A0D92NR4j08B0DsP4VJc0wijapyYXWuk6OphJ8PGxJnjmRrFXlD1qezW0yQIDie_hDHFvfwHGism-SRnwEd05yQdVz9qeBfTPbdnqEzUL9MBjXa6l_17V3GorPyxRPQZNorEqYaV_t1bmE31YE5YnJI8Ncc=w505-h674-no?authuser=0',
      time: "7:00 - 9:30 pm May 4th 2024",
      maplink: "href",
      location: "Activities Center",
      description: "We'll celebrate with snacks, desserts and drinks! The reception is a 20 minute walk or 10 minute bike ride on protected trails. It is 5 minutes by car.",
      toggle: setTogglereception,
      state: togglereception,
      rsvp: "href",
      rsvpState: togglereceptionRSVP,
      rsvptoggle: setTogglereceptionRSVP,
      rsvpForm: "https://docs.google.com/forms/d/e/1FAIpQLSc77ffeLjR4-9WjkI0409iNJzsyEnQPrdfa0CpRH3UFXzG-TA/viewform?embedded=true"
    },
    {
      name: "After Party",
      id: "lanternParade",
      picture: 'https://lh3.googleusercontent.com/18gg2Ayw4iGAcQySIqIl3KxT82lUKFG5j0IzPsm_XpyfeM8NEWvMT-y9ifu2kUUsmmE-gdIzG9086aXJ_eSn3BU44VJhfxgCPdn7SjAJZ7W9n-xFKvUxcUJLe1BKif-W4fyhEhUg_hS2X3GvcLz90uoa8tx6CaeNU8M3e1239qSeKHZClA2PN33QoHFlGzurugkUjNyunfUchLV2cwJWB3J3AeN15dwv4euzTTUDcTWFHOGbhHb5d1b35D0wSD7ZQX3gacemi1VZncw1VZeV46k8AajJ09d94Q6M9l5LpxAsMSpaB1FO2k1c4BlGTsXHoNDQuPlk-7BNitIYMyffDjE4QBksGGJMIPt8ZqvfYOQa40yzA27QQHrj-pcCFPFxkThJmCU6qwRsGJaFoN_TnTQ9IrWLeIsTeyMZQr4zUYVsuWjqNAAxNS5EYJtnJ49p3KuI3Mq2GzvrX4jQhGsYxyNVRNp0fdmgBiWXKv82tGUMnVHpA7opoHJxnFfyTo4sM1apmkS0WL1ggO-5s5MJLb3MUSj5NRPqA6LpXYqcJo4un4ocI9YiZx7VbrdKLWPxRqtrh1gbg1H8RZZq9KoraoidWe92XTqCuFQDjXYMD2m9RDcbteOyFIzbQHYFgUUj8GOMWQvfj5B-fXQepMmggblkzlL-k-4SU00NbubctGEJWM3dGKMfjav1Rx1nGuPXB4426ZITiUGCtZ6VC_D0_Ra3ny3Dr0Af-0dJvxbpwDbPC9QqnmIvKB8IBKokKMzRXRluuAfeJolI1RLtsWmZa3eLSSW3MnNFaSOJ_Tf8Ijz1OgPQIrFLdiWV1thX5PSX9rtke7-XwyZCFl2di2T2A1o2DRLZzssqDx9l7WulsiuWVVcLP78Hbh_IQEBausg6jYTodrpTBJy1av5L0-eMk4yQb_nl8BnTJUgwSeQdmYmDrCfCxYz7UU61Vyrt6yMiDm-HuPTvtjMfkGpRt-Do0HzRKmELub2cXcabPFXhHeg=w360-h480-no?authuser=0',
      time: "10:30-ish May 4th 2024",
      maplink: "href",
      location: "Eagle Cottages",
      description: "Join us for a bonfire on the lake. The afterparty is a 40 minute walk or 12 minute bike ride on protected trails. It is 10 minutes by car.",
      toggle: setTogglelanternParade,
      state: togglelanternParade,
    },
    {
      name: "Bagel Brunch",
      id: "bagelBrunch",
      picture: 'https://lh3.googleusercontent.com/3PX-vmI09dFNF5v7tdij89lomKyxSHSbce3omWptAbwlpiOJWDOorKhh8mAQ0-NZU0r3aUglT6DPXD8moLw0RtjFFy8zjNQP3rTnP2L6ZQGLDP0p6jskli_11bd7W4fwpB_-rR2IW8jauefTzN2aKlmtXjCZy2M-6pREf6f7PNxjKNw7iUmtc2H22Mz_vvGoom6f24GlX7EILsY7qLICWMPenebG5h9gZeTwV0p-oBkg8osSpjUu45nFYxJfI_9-kn-1k_qzXNlXVQu0ax2X6WQ_q0XzESisF49NUdiMfBiiLtCr-n8ZrjL3X0a9cxqBSblehKPW056ZRuHmvAxDD0HkPnNNhD6U5sl3kot4Frm6DSRgVaPruIFpGIVYyDcdDBScCQUCmD9SXpTKqt3N6P4cNPViWNCJQsrHijUPyZQyq8EVsfMwu2t-KuCKg9ivlWhM8KJ5jSdJPCwMW5e1KJ8fKDuPVQc-FArJGwuo3K-NnpE5RupWGvvDunmZ6WtQLztA_7uf329kAFDCfHzR2--yKY9zI-bth7EiyYhhwZIe-ABH-6khtHPBy3WpoGJkBvmnm1fpuLDT12G_5XcVgc05sDFESNgxFxa4_-bIBFFEjw-HR9fJeZGPrJqBf5YkPKsvpr3lp8ZBScybmHwZz_c_xsnXOnRmeIZDAw_UdpSSXSzl0eFHFJFmXV4vvLD52ZJAP5LcyZyKnZoxOM6VtjXAzzPN5cVGqGjFOCXf5VqGLh-3KRVTi2HYvt478SLXgryPXJrAJYR_2R0PxLwSrf-kedP6CJ28ycg_On99V9gpxNI00h1ZNQ56HhXwnO0DzKDJ5pmZWHRC-1S5mH2--uBojSHXldSuEKMtD2dyHIGi0HFzV9912yudUzyW6SETADaKHLCfBM0SzaQRouI1u8-fwyayfALBat-liHxbeBfl9U78aoTERDV2GUa5a7_Q1oSsdM4PBtPeaKcZd7RWCjIQsC_YnGo0ebXVxbIXFTM=w899-h674-no?authuser=0"), url("https://lh3.googleusercontent.com/3PX-vmI09dFNF5v7tdij89lomKyxSHSbce3omWptAbwlpiOJWDOorKhh8mAQ0-NZU0r3aUglT6DPXD8moLw0RtjFFy8zjNQP3rTnP2L6ZQGLDP0p6jskli_11bd7W4fwpB_-rR2IW8jauefTzN2aKlmtXjCZy2M-6pREf6f7PNxjKNw7iUmtc2H22Mz_vvGoom6f24GlX7EILsY7qLICWMPenebG5h9gZeTwV0p-oBkg8osSpjUu45nFYxJfI_9-kn-1k_qzXNlXVQu0ax2X6WQ_q0XzESisF49NUdiMfBiiLtCr-n8ZrjL3X0a9cxqBSblehKPW056ZRuHmvAxDD0HkPnNNhD6U5sl3kot4Frm6DSRgVaPruIFpGIVYyDcdDBScCQUCmD9SXpTKqt3N6P4cNPViWNCJQsrHijUPyZQyq8EVsfMwu2t-KuCKg9ivlWhM8KJ5jSdJPCwMW5e1KJ8fKDuPVQc-FArJGwuo3K-NnpE5RupWGvvDunmZ6WtQLztA_7uf329kAFDCfHzR2--yKY9zI-bth7EiyYhhwZIe-ABH-6khtHPBy3WpoGJkBvmnm1fpuLDT12G_5XcVgc05sDFESNgxFxa4_-bIBFFEjw-HR9fJeZGPrJqBf5YkPKsvpr3lp8ZBScybmHwZz_c_xsnXOnRmeIZDAw_UdpSSXSzl0eFHFJFmXV4vvLD52ZJAP5LcyZyKnZoxOM6VtjXAzzPN5cVGqGjFOCXf5VqGLh-3KRVTi2HYvt478SLXgryPXJrAJYR_2R0PxLwSrf-kedP6CJ28ycg_On99V9gpxNI00h1ZNQ56HhXwnO0DzKDJ5pmZWHRC-1S5mH2--uBojSHXldSuEKMtD2dyHIGi0HFzV9912yudUzyW6SETADaKHLCfBM0SzaQRouI1u8-fwyayfALBat-liHxbeBfl9U78aoTERDV2GUa5a7_Q1oSsdM4PBtPeaKcZd7RWCjIQsC_YnGo0ebXVxbIXFTM=w898-h673-no?authuser=0',
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

  let places = [
    {
      name:"State Park Primitive camping",
      sleeps:8,
      costs:"$20/night, $5 reservation fee, 2 night minimum",
      picture:"https://www.alapark.com/sites/default/files/styles/default/public/2022-04/Gulf%20State%20Park%20Campground%20Back%20In%20Campsites.jpg?itok=0IYma8xD",
      description:"The reception location is in the campground. \n"+
      "The primitive sites have some trees and shade. We highly recommend going with primitive \n"+
      "if you are comfortable with foregoing electric and water at your site. Contact us about borrowing camping gear if you're \n"+
      "coming from out if town and would like to camp. We advise making camping reservations sooner rather than later."+
      "ASAP if you plan to camp. Make sure to search 'Gulf State Park' in the book link and then look for Primitive Camping",
      booklink:"https://www.reservealapark.com/AlabamaWebHome/Facilities/SearchViewUnitAvailabity.aspx",
      toggle: setTogglePrimInfo,
      state: togglePrimInfo,
    },{
      name:"State Park RV camping",
      sleeps:8,
      costs:"$43/night, $5 reservation fee, 2 night minimum",
      picture:"https://www.alapark.com/sites/default/files/styles/default/public/2019-04/dsp_improved_header_2019_0.jpg?itok=k22n7fa_",
      description:"The reception location is in the campground. The campground has a pool, tennis court, and lots of bathrooms! We think sites 4-8 are the nicest, but please email alexandregina.24@gmail.com for more site reccomendations if those are booked. We advise making camping reservations sooner rather than later.",
      booklink:"https://www.reservealapark.com/AlabamaWebHome/Facilities/SearchViewUnitAvailabity.aspx",
      toggle: setToggleRVInfo,
      state: toggleRVInfo,
    },
    {
      name:"Woodside Cabins at Gulf State Park",
      sleeps:"4 cabins with differnt cofigurations sleeping 4-6",
      costs:"$265 - $325/night, senior and military discounts available",
      picture:"https://thecabinsatgsp.com/wp-content/uploads/2023/03/20220411_152022.jpg",
      description:"Cute cabins located a very short walk from the Eagle Cottages.",
      booklink:"https://secure.webrez.com//Bookings105/activity-edit.html?table=hotels&listing_id=2642&mode=command&command=website_availabilitycalendar&hotel_id=2642&language=&&date_from=20240503",
      toggle: setToggleCabinInfo,
      state: toggleCabinInfo,
    },
    {
      name:"Lakeside Cabins at Gulf State Park",
      sleeps:"4",
      costs:"Prices and reservations will be available when cabins are completed in November 2023. Prices will be between the Eagle Cottages and Woodside Cabins.",
      picture: "https://thecabinsatgsp.com/wp-content/uploads/2023/03/Renovated-Lakeside-Cabins-Rendering-B-Final-2-700x700.jpg",
      description:"The lakeside cabins are next to the eagle cottages on Lake Shelby.",
      booklink:"https://secure.webrez.com//Bookings105/activity-edit.html?table=hotels&listing_id=2642&mode=command&command=website_availabilitycalendar&hotel_id=2642&language=&&date_from=20240503",
      toggle: setToggleLakeCabinInfo,
      state: toggleLakeCabinInfo,
    },
    {
    name:"Eagle Cottages at Gulf State Park",
    sleeps:"6 (3 bedroom, 3 bath)",
    costs:"$580/night, senior and military discounts available",
    picture:"https://wrp-graphics-public-old.s3.amazonaws.com/file-hotels-2642-hotel_thumbnail_url.jpg",
    description:"The crawfish boil and afterparty will take place at the cabins. Waterfront cabins with 6 bike rentals, firewood, restaurant breakfast, and other amenities.",
    booklink:"https://secure.webrez.com//Bookings105/activity-edit.html?table=hotels&listing_id=2642&mode=command&command=website_availabilitycalendar&hotel_id=2642&language=&&date_from=20240503",
    toggle: setToggleEagleCabinInfo,
    state: toggleEagleCabinInfo,
  },
  {
    name:"Nearby hotels and airbnbs",
    sleeps:"Variable",
    costs:"Variable",
    picture:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-42610079/original/48fcd267-7937-41ee-bb36-5566888377fb.jpeg?im_w=720",
    description:"If you are on a budget, prefer not to camp, and would like to stay near the afterparty, there are several good options near the back entrance to the park on E. Morgan Rd. & E. 2nd St.",
    booklink:"https://www.airbnb.com/s/Gulf-State-Park--Gulf-Shores--Alabama--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2023-06-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=2&channel=EXPLORE&query=Gulf%20State%20Park%2C%20Gulf%20Shores%2C%20AL&date_picker_type=calendar&checkin=2024-05-03&checkout=2024-05-05&source=structured_search_input_header&search_type=autocomplete_click&place_id=ChIJAf8qlDAEmogROxDShN5jCUY",
    toggle: setToggleBnBInfo,
    state: toggleBnBInfo,
  }
];

  function getPlaces() {
    return places;
  }

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



  function getCountdown(){
      // Set the date we're counting down to
      var countDownDate = new Date("May 4, 2024 19:00:00").getTime();
      // get date
      var now = new Date().getTime();
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        return days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";
      } else{
        return "We Married"
      }
  }

  // Update the count down every 1 second
  var jcountdown = setInterval(getCountdown(), 10000);

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
      {/* <h1>Alex &#38; Regina</h1>
      <h2>May 4th, 2024</h2> */}
      <img width="100%" src="https://lh3.googleusercontent.com/pw/ABLVV878gH9yNyA5qt5BMdcW--28JtWJEMsVrJGb-Wvus6OJD-6ve0pyAU1b_eq2JNS8OGwqF43Q8l9ruNzrG2qZEgb1y05whaYfy-M_d5cl9w_fsS4bm0FXeB9EC35Kn-VDkUayATBbYfRgkSi5Ic6JaerI=w1138-h879-s-no-gm?authuser=0"/>
      <br></br>
      <h3><a onClick={() => clickForm(events[3])} >Please RSVP Here by March 13th</a></h3>
      <div>{ events[3].rsvpState && <EventForm event={events[3]} />}</div>
      <br></br>
      <h3>
        Wedding Events
      </h3>
      <ul>
        {getEvents().map((event,index)=>{
            return <li key={index}>{event.name}&nbsp; 
                <a onClick={() => clickDetails(event)} >Details</a>    
                { event.state && <EventDetails event={event} />}
              </li>})}
      </ul>
      <br />
      <h3>
        Sleeping Accomodation Suggestions
      </h3>
      <ul>
      {getPlaces().map((place,index)=>{
            return <li key={index}>{place.name}&nbsp;
                <a onClick={() => place.toggle(!place.state)} >Info</a><Spacer />
                <a href={place.booklink} >Book</a>
                {place.state && <BookingInfo place={place} />}
                </li>})}
      </ul>
      <br />
      <h2>Countdown:</h2>
      <h3>{jcountdown ? jcountdown : 'Loading date...'}</h3>
    </main>
  );
}

export default App;
