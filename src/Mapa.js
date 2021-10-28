import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax


function Mapa() {
  mapboxgl.accessToken = 'pk.eyJ1Ijoia2FlY2lvIiwiYSI6ImNrbmM5bWs0NDFteGwyc28wcWltd2praDQifQ.88Vcrfzy6vXYP4ZQTcsOLQ';
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(-30.9);
    const [lat] = useState(-10.35);
    const [zoom] = useState(2);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [lng, lat],
        zoom: zoom
        }); 
        });

        return (
            <div>
              <br></br>
              <div ref={mapContainer} className="map-container" />
            </div>
          );
}

export default Mapa;
