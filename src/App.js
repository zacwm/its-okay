import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import resources from './resources.js';
import './style.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faLink, faPhone, faAt } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [isWaitingLocation, setIsWaitingLocation] = useState(true);
  const [locationError, setLocationError] = useState(false);

  const [locationData, setLocationData] = useState({
    region: '',
    country: '',
    country_code: ''
  });

  const [locResources, setLocResources] = useState([]);

  useEffect(() => {
    async function getGeoData() {
      try {
        const res = await axios.get('https://get.geojs.io/v1/ip/geo.json');
        if (res.status !== 200) return;
        setIsWaitingLocation(false);
        setLocationData(res.data);
        getResourceData(res.data);
        console.dir({
          country_code: res.data.country_code,
          region: res.data.region,
          city: res.data.city,
        })
      } catch (err) {
        setLocationError(true);
      }
    }

    function getResourceData(location) {
      let resourceData = [];

      if (resources[location.country_code]?.constructor === Array)
        resourceData = resources[location.country_code];
      else if (resources[location.country_code]?.[location.region]?.constructor === Array)
        resourceData = resources[location.country_code][location.region];
      else if (resources[location.country_code]?.[location.region]?.[location.city]?.constructor === Array)
        resourceData = resources[location.country_code][location.region][location.city];

      if (resources[location.country_code]?.['default']?.constructor === Array)
        resourceData = resourceData.concat(resources[location.country_code]['default']);
      else if (resources[location.country_code]?.['default']?.[location.region]?.constructor === Array)
        resourceData = resourceData.concat(resources[location.country_code]['default'][location.region]);
      else if (resources[location.country_code]?.['default']?.[location.region]?.[location.city]?.constructor === Array)
        resourceData = resourceData.concat(resources[location.country_code]['default'][location.region][location.city]);
        
      setLocResources(resourceData.concat(resources.default || []));
    }


    getGeoData();
  }, []);



  return (
    <div className="App">
      <div className="Header">
        <p><FontAwesomeIcon icon={faHeart} color="#fd79a8" className="icon" /> It's okay</p>
        <p>Here are contacts that can help you based on your location, they care!</p>
        {
          locationError ? <p className="errorText">Error getting location, it's possible this is due to a privacy setting or extension blocking the request.</p>
          : <p>{isWaitingLocation ? 'Getting estimated location...' : `Location: ${locationData.city ? `${locationData.city}, ` : ''}${locationData.region ? `${locationData.region}, ` : ''}${locationData.country}`}</p>
        }
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