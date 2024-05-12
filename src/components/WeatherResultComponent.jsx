import React, { useState, useEffect } from "react";
import axios from "axios";
import { Flex } from "antd";
import getIconUrl from "../services/IconService";

const WeatherResultComponent = ({ city }) => {
  const [cityName, setCityName] = useState(null);
  const [country, setCountry] = useState("");
  const [weatherType, setWeatherType] = useState(null);
  const [temp, setTemp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch weather data from OpenWeatherMap API
    if (city !== null && city !== "") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b1646ebe99f1e74cdab46075994d52c7`
        )
        .then((response) => {
          setError(false);
          setCityName(response.data.name);
          setCountry(response.data.sys.country);
          setWeatherType(response.data.weather[0].main);
          setTemp(response.data.main.temp);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [city]);

  const style = { textAlign: "center" };

  return (
    <Flex justify="center" align="center" style={style} gap="large" vertical>
      {!loading &&
        (error ? (
          <div>
            <img
              src="	https://cdn-icons-png.flaticon.com/512/1156/1156412.png"
              alt="Error"
              height="300"
            />
            <p>Not Found</p>
          </div>
        ) : (
          <Flex justify="center" align="center" style={style} gap="middle" vertical>
            <div>
              {cityName}, {country}
            </div>
            <div>
              <img src={getIconUrl(weatherType)} height="300" /> <br />
            </div>
            <div>{weatherType}</div>
            <Flex justify="center" align="center" style={{ fontSize: "25px" }}>
              <img src="https://cdn-icons-png.flaticon.com/512/808/808602.png" height="50" />
              {temp}ºC
            </Flex>
          </Flex>
        ))}
    </Flex>
  );
};

export default WeatherResultComponent;
