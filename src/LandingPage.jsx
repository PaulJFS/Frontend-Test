import { ReactComponent as Logo } from "./cons Logo.svg";
import Pb from "./IMG_6490.PNG";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardBody, CardContainer, CardItem } from "./components/ui/3d-card";
import Leipzig from "./assets/lpz.jpeg";
import Bremen from "./assets/Bmn.jpeg";
import München from "./assets/muc.jpeg";
function LandingPage() {
  const [location, setLocation] = useState(() => {
    const savedLocation = localStorage.getItem("selectedLocation");
    return savedLocation ? savedLocation : "Bremen";
  });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWeather(location);
    const interval = setInterval(() => {
      fetchWeather(location);
    }, 30000);
    return () => clearInterval(interval);
  }, [location]);

  const fetchWeather = async (location) => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=d0b7abc2b79441ef8e993054241303&q=${location}&lang=de`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Fehler beim Abrufen der Wetterdaten:", error);
    }
  };

  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;
    setLocation(selectedLocation);
    localStorage.setItem("selectedLocation", selectedLocation);
  };

  let src = Leipzig;
  let route = "";

  switch (location) {
    case "Bremen":
      src = Bremen;
      route =
        "https://www.google.de/maps/place/Bremen/@53.1199176,8.5714818,11z/data=!3m1!4b1!4m6!3m5!1s0x47b128100ceee335:0xc2e8885cf937df51!8m2!3d53.0792962!4d8.8016936!16zL20vMDE3d18?entry=ttu";
      break;
    case "Leipzig":
      src = Leipzig;
      route =
        "https://www.google.de/maps/place/Leipzig/@51.3416669,12.2288305,11z/data=!3m1!4b1!4m6!3m5!1s0x47a6f818200f2c73:0x93df80d2b9b4f552!8m2!3d51.3396955!4d12.3730747!16zL20vMDRrZjQ?entry=ttu";
      break;
    case "München":
      src = München;
      route =
        "https://www.google.de/maps/place/M%C3%BCnchen/@48.154793,11.3770307,11z/data=!3m1!4b1!4m6!3m5!1s0x479e75f9a38c5fd9:0x10cb84a7db1987d!8m2!3d48.1351253!4d11.5819805!16s%2Fm%2F02h6_6p?entry=ttu";
      break;
    default:
      src = Leipzig;
      route = "";
  }

  return (
    <>
      <header className="bg-regal-blue p-5 pl-5 border-none lg:pl-32 sticky top-0">
        <div class="flex">
          <Logo />
          <select
            className="p-2 rounded mx-5 mt-1 fixed right-0"
            value={location}
            onChange={handleLocationChange}
          >
            <option value="Bremen">Bremen</option>
            <option value="München">München</option>
            <option value="Leipzig">Leipzig</option>
          </select>
        </div>
        <ul className="text-regal-white flex gap-2 mt-3 font-bold">
          <li className="px-2 py-2 rounded-md hover:bg-regal-green/90">
            Lorem
          </li>
          <li className="px-2 py-2 rounded-md hover:bg-regal-green/90">
            Ipsum
          </li>
          <li className="px-2 py-2 rounded-md hover:bg-regal-green/90">
            Dolor
          </li>
        </ul>
      </header>
      <div className="bg-regal-blue text-regal-white border-none mx-auto flex flex-col lg:flex-row items-start justify-center gap-16 lg:gap-32 px-8 py-12 lg:py-32">
        <h1 className=" text-4xl max-w-sm text-regal-green text-left justify-items-start">
          <b>Lorem ipsum dolor sit amet,</b> consetetur sadipscing elitr.
        </h1>
        <img
          className="rounded-md w-full lg:w-1/3    "
          alt="profile-pic"
          src={Pb}
        />
      </div>
      <div className="flex flex-col items-center mt-10">
        <div className="max-w-2xl text-left flex flex-col gap-10 mb-20 px-5">
          <h1 className="text-4xl  text-regal-green text-left">
            <b>Lorem ipsum dolor sit amet,</b> consetetur sadipscing elitr.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. <b>Stet clita kasd gubergren,</b> no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-3 mx-5 mb-10 max-w-6xl justify-center">
          <div className=" bg-regal-green text-regal-white text-2xl rounded-md p-5 text-left w-full min-h-64">
            {weather && (
              <>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore{" "}
                  <b> et dolore magna aliquyam erat, sed diam voluptua.</b> At
                  vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est.
                </p>
              </>
            )}
          </div>

          <div className=" bg-regal-blue rounded-md p-5 flex flex-col gap-2 w-full">
            <h1 className="text-3xl lg:text-4xl text-regal-green text-left mb-5">
              <span className="font-bold">Lorem ipsum dolor sit amet,</span>{" "}
              consetetur sadipscing elitr.
            </h1>
            <input className="p-3 rounded-md w-full" placeholder="Name" />
            <input
              className="p-3 rounded-md w-full"
              placeholder="E-Mail Adresse"
            />
            <textarea
              className="p-3 rounded-md w-full resize-none"
              placeholder="Nachricht"
              rows="5"
            />
            <div className=" text-regal-white flex justify-left items-center gap-1">
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                type="checkbox"
              />{" "}
              Einwilligung zur Datenverarbeitung*
            </div>
            <button className="rounded-md md:w-40 bg-regal-orange text-regal-white font-bold p-2">
              Jetzt absenden!
            </button>
          </div>
        </div>
      </div>
      <CardContainer className=" inter-var mb-10">
        <CardBody className=" group/card bg-regal-blue text-regal-green rounded-md p-5 text-left ">
          <CardItem
            translateZ="50"
            className="text-4xl font-bold text-regal-green hover:scale-125"
          >
            <div className="flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <span>
                {location} {weather.current.temp_c}°C
              </span>
            </div>
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-200 text-sm max-w-sm mt-2"
          >
            Das Wetter in {location} ist momentan{" "}
            {weather.current.condition.text}.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img className="rounded-md " alt="city-pic" src={src} />
          </CardItem>
          <div className="flex justify-between items-center mt-6">
            <CardItem
              translateZ="20"
              as="a"
              href={route}
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal "
            >
              Route →
            </CardItem>
            <CardItem
              translateZ="20"
              as="a"
              href="https://github.com/PaulJFS/Frontend-Test"
              target="__blank"
              className="px-4 py-2 rounded-xl bg-regal-green text-white  text-xs font-bold"
            >
              <div className="flex flex-row items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                GitHub
              </div>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </>
  );
}

export default LandingPage;
