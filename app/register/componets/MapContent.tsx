import React from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapContent({
  position,
  setPosition,
}: {
  position: [number, number];
  setPosition: (value: React.SetStateAction<[number, number]>) => void;
}) {
  function LocationMarker() {
    const map = useMap();

    map.addEventListener("click", function (e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
    });

    map.locate().on("locationfound", function (e) {
      map.flyTo(e.latlng, map.getZoom());
    });

    return position === null ? null : <Marker position={position}></Marker>;
  }

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LocationMarker />
    </MapContainer>
  );
}
