import React, { useState } from "react";
import { Button, Flex, Segmented } from "antd";
import { Input, Space } from "antd";
import WeatherResultComponent from "../components/WeatherResultComponent";

const LandingPage = () => {
  const backgroundStyle = {
    width: "100%",
    height: "100vh",
    backgroundColor: "#000000",
  };

  const boxStyle = {
    backgroundColor: "#ffffff",
    padding: "10px",
    borderRadius: "10px",
  };

  const { Search } = Input;

  const [city, setCity] = useState(null);
  const onSearch = (value) => {
    setCity(value);
    // setFirstRender(false);
  };

  const resultStyle = { marginTop: "30px" };

  return (
    <Flex style={backgroundStyle} justify="center" align="center" vertical>
      <Flex style={boxStyle} align="center" vertical>
        {/* Search Bar */}
        <div>
          <Search
            placeholder="ENTER YOUR LOCATION"
            allowClear="true"
            onSearch={onSearch}
            size="large"
            style={{
              width: "30vw",
              fontSize: "50px",
              textTransform: "capitalize",
            }}
          />
        </div>

        {/* Result */}
        <Flex style={resultStyle} justify="center" align="center" vertical>
          <WeatherResultComponent city={city} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LandingPage;
