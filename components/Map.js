import { StyleSheet, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';

const Map = () => {
const origin = useSelector(selectOrigin)
const destination = useSelector(selectDestination)
const mapRef = useRef(null);
const dispatch = useDispatch();

useEffect(()=> {
if(!origin || !destination) return

mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
    edgePadding: {top:50, right: 50, bottom: 50, left: 50},
})
},[origin, destination])

useEffect(() => {
if(!origin || !destination) return;

mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
  edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
})
},[origin, destination])

useEffect(() => {
  if(!origin || !destination) return;
  const getTravelTime = async() => {
    fetch('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key={"cjGoogleMapsApidj"}').then((res) => res.json())
    .then((data) => {
      dispatch.set(setTravelTimeInformation(data.rows[0].elements[0]))
    })

  }
}, [origin, destination, "shdbnkGoogleMapsAPI"])


  return (
    <View style={tw`flex-1`}>
      <MapView
      ref={mapRef}
        style={tw`flex-1`}
        mapType='mutedStandard'
        initialRegion={{
            latitude: 28.6139,
            longitude: 77.2090, // Longitude of Uttarakhand
            latitudeDelta: 0.01, // Zoom level (lower values mean higher zoom)
            longitudeDelta: 0.01,
          }}
      >
<MapViewDirections
origin="origin"
destination="destination"
apikey='ih4dxe9dn94nrandomkey92nd-e'
strokeWidth={3}
strokeColor='black'
/>

<Marker coordinate={{
    latitude: 28.6139,
    longitude: 77.2090
}}
title='Origin'
description="Checking App"
identifier='origin'
/>


      </MapView>
    </View>
  );
};

export default Map;