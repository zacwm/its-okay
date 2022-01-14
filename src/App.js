import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import resources from './resources.js';
import './style.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faLink, faPhone, faAt } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [locationData, setLocationData] = useState({
    regionName: '',
    country: '',
    countryCode: ''
  });

  const [locResources, setLocResources] = useState([]);

  useEffect(() => {
    async function getGeoData() {
      const res = await axios.get('http://ip-api.com/json/?fields=16415')
      if (res.status !== 200) return;
      if (res.data.status !== "success") return;
      console.dir(res.data);
      setLocationData(res.data);
      getResourceData(res.data);
    }

    function getResourceData(data) {
      // @zacimac - This looks very messy, I don't think i'm doing this right.
      let resourceData = [];
      if (resources[data.countryCode]) {
        if (resources[data.countryCode].constructor === Object) {
          if (resources[data.countryCode][data.region]) {
            if (resources[data.countryCode][data.region].constructor === Object) {
              if (resources[data.countryCode][data.region][data.city]) {
                resourceData = resourceData.concat(resources[data.countryCode][data.region][data.city]);
              }
              if (resources[data.countryCode][data.region].default) {
                resourceData = resourceData.concat(resources[data.countryCode][data.region].default);
              }
            } else if (resources[data.countryCode][data.region].constructor === Array) {
              resourceData = resourceData.concat(resources[data.countryCode][data.region]);
            }
          }
          if (resources[data.countryCode].default) {
            resourceData = resourceData.concat(resources[data.countryCode].default);
          }
        } else if (resources[data.countryCode].constructor === Array) {
          resourceData = resourceData.concat(resources[data.countryCode]);
        }
      }
      setLocResources(resourceData.concat(resources.default));
    }


    getGeoData();
  }, []);



  return (
    <div className="App">
      <div className="Header">
        <p><FontAwesomeIcon icon={faHeart} color="#fd79a8" className="icon" /> It's okay</p>
        <p>Here are contacts that can help you based on your location, they care!</p>
        <p>Location: {locationData.regionName ? `${locationData.regionName}, ` : ''}{locationData.country}.</p>
      </div>

      <div className="Resources">
        {
          locResources.map((resource, index) => {
            return (
              <div key={index} className="Card">
                <p className="icon"><FontAwesomeIcon icon={faHeart} color="#fd79a8" /></p>
                <div className="text">
                  <p>{resource.title}</p>
                  <div className="links">
                    {resource.website ? (<a href={`https://${resource.website}`}><FontAwesomeIcon icon={faLink} color="#fd79a8" /> {resource.website}</a>) : undefined}
                    {resource.phone ? (<a href={`tel:${resource.phone}`}><FontAwesomeIcon icon={faPhone} color="#fd79a8" /> {resource.phone}</a>) : undefined}
                    {resource.email ? (<a href={`mailto:${resource.email}`}><FontAwesomeIcon icon={faAt} color="#fd79a8" /> {resource.email}</a>) : undefined}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

      <p>Is there something missing? <a href="https://github.com/zacimac/its-okay" style={{ color: "#fd79a8" }}>Help us on GitHub</a></p>
    </div>
  );
}

export default App;