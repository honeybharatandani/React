import React, { useEffect, useState } from "react";
// import { IoLocation } from "react-icons/io5";
// import { BsSearch } from "react-icons/bs";
import { CircleLoader } from "react-spinners";

const Weather = () => {
  const [city, setCity] = useState({});
  const [search, setSearch] = useState("usa");
  const [loading, setLoading] = useState(true);
  // const [wicon, setWicon] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      // const url=`https://api.openweathermap.org/data/2.5/onecall?${search}lat=28.2791&lon=77.7684&exclude=hourly,minutely&appid=8a2401c943585264733eb3beb1368e1d`
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8a2401c943585264733eb3beb1368e1d`;
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setCity(data.main);
      // setWicon(data.weather[0].icon);
      setLoading(false);
    };

    fetchApi();
  }, [search]);

  // console.log("data",city);

  const override = `
  display: block;
  margin: 0 auto;
  speedMultiplier: 3;
  `;

  return (
    <>
      <div className="container-sm bg-dark  text-light flex-column  d-flex  pt-3 text-center">
        <div>
          <h1>Search for Weather</h1>
          <div>
            <input
              value={search}
              type="search"
              className="form-control"
              placeholder="Enter City name"
              onChange={event => {
                setSearch(event.target.value);
              }}
            ></input>
          </div>

          <CircleLoader
            size={100}
            color={"#fff"}
            loading={loading}
            css={override}
          />

          {!city ? (
            <p>No Data Found</p>
          ) : (
            <div>
              <h1>
                {city.temp} °C
              
                </h1>
                {/* <img
                  src={`http://openweathermap.org/img/wn/${wicon}@2x.png`}
                  alt="icon"
                /> */}
              {/* <h2>{city.sys.sunrise}</h2> */}
              <h4>Pressure {city.pressure} hpa</h4>
                <h4>Humidity {city.humidity} %</h4>
              {/* <h3>
                  Min: {city.temp_min}°C | Max: {city.temp_max}°C
                </h3> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Weather;
