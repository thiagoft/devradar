import React, { useState, useEffect } from "react";

import "./styles.css";

export default function DevForm({ handleAddDev }) {
  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      error => {
        console.log(error);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    handleAddDev({
      github_username,
      techs,
      latitude,
      longitude
    });

    setTechs("");
    setGithubUsername("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="github_username">Github User</label>
          <input
            name="github_username"
            id="github_username"
            required
            value={github_username}
            onChange={event => setGithubUsername(event.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="techs">Technologies</label>
          <input
            name="techs"
            id="techs"
            required
            value={techs}
            onChange={event => setTechs(event.target.value)}
          />
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input
              name="latitude"
              type="number"
              id="latitude"
              required
              value={latitude}
              onChange={event => setLatitude(event.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input
              name="longitude"
              type="number"
              id="longitude"
              required
              value={longitude}
              onChange={event => setLongitude(event.target.value)}
            />
          </div>
        </div>

        <button type="submit">Save</button>
      </form>
    </>
  );
}
