import React, {useState, useEffect} from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';

const MapTrip = props => {

  const [position, setPosition] = useState([0, 0]);
  const [position1, setPosition1] = useState([0, 0]);

  useEffect(()=>{
      setPosition([props.pickup_lat, props.pickup_lng ]);
      setPosition1([props.dropoff_lat, props.dropoff_lng ]);
  }, [props.pickup_lat, props.pickup_lng, props.dropoff_lat, props.dropoff_lng])


  console.log(position)
  console.log(position1)
  return (
    <Map center={position}  zoom={13}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
      <Marker position={position1}>
        <Popup>
          <span>Trip completed here</span>
        </Popup>
      </Marker>
      <Marker position={position}>
        <Popup>
          <span>Trip started here</span>
        </Popup>
      </Marker>
    </Map>
  );
};

export default MapTrip;