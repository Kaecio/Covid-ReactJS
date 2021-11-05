import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import React, { useRef, useEffect, useState } from 'react';
import ReactMapGL from 'react-map-gl';
mapboxgl.accessToken = 'pk.eyJ1Ijoia2FlY2lvIiwiYSI6ImNrdmtjbTlwbzJocWoydG51MzgxbjAwcnAifQ.sd4lrH7uFZ1YLqvJNixUYA';

function Mapa({longitude, latitude}) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [zoom] = useState(2);
  const [color] = useState('red')
  
  useEffect(() => {
    // if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [longitude, latitude],
      zoom: zoom
    });
    const locationPoint = new mapboxgl.Marker({ color: color }).setLngLat([longitude, latitude]).addTo(map.current);
    console.log(locationPoint)
  });

     return (
        <div className="mapbox">
          <ReactMapGL />
            <div ref={mapContainer} className="map-container"></div>
        </div>
    );
}

export default Mapa;
