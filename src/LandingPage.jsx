import { ReactComponent as Logo } from "./cons Logo.svg";
import Pb from "./IMG_6490.PNG";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
        <ul className="text-regal-white flex gap-5 mt-5 font-bold">
          <li>Lorem</li>
          <li>Ipsum</li>
          <li>Dolor</li>
        </ul>
      </header>
      <div className="bg-regal-blue text-regal-white border-none mx-auto flex flex-col lg:flex-row items-start justify-center gap-16 lg:gap-32 px-8 py-12 lg:py-32">
        <h1 className="text-4xl max-w-sm text-regal-green text-left">
          <span className="font-bold">Lorem ipsum dolor sit amet,</span>{" "}
          consetetur sadipscing elitr.
        </h1>
        <img
          className="rounded-md w-full lg:w-1/3 px-5 h-auto "
          alt="profile-pic"
          src={Pb}
        />
      </div>
      <div className="flex flex-col items-center mt-10">
        <div className="max-w-2xl text-left flex flex-col gap-10 mb-20 px-5">
          <h1 className="text-4xl  text-regal-green text-left">
            <span className="font-bold">Lorem ipsum dolor sit amet,</span>{" "}
            consetetur sadipscing elitr.
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
        <div className="flex flex-col lg:flex-row gap-3 mx-5 mb-10 max-w-6xl justify-items-center">
          <div className=" bg-regal-green text-regal-white text-xl rounded-md p-5 text-left w-full min-h-64">
            {weather && (
              <>
                <p>
                  Die aktuelle Temperatur in {location} beträgt{" "}
                  {weather.current.temp_c}°C und das Wetter ist{" "}
                  {weather.current.condition.text}.
                </p>
              </>
            )}
          </div>
          <div className=" bg-regal-blue rounded-md p-5 flex flex-col gap-2">
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
            <div className=" text-regal-white">
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                type="checkbox"
              />{" "}
              Einwilligung zur Datenverarbeitung*
            </div>
            <button className="rounded-md bg-regal-orange text-regal-white font-bold p-2">
              Jetzt absenden!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
