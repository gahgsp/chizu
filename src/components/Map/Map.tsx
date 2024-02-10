import React, { useEffect, useRef, useState } from "react";
// @ts-ignore
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export interface MapProps {
  id: string;
}

// TODO: Change to use our own key using an .env file.
mapboxgl.accessToken =
  "pk.eyJ1IjoiYWdlbmNlc3R1ZGlvbWV0YSIsImEiOiJjanh5ZW81aHEwOHV3M2lwZzhhNW1vdXl5In0.3hbV2QKVzZWf511JK9xCug";

const Map = ({ id }: MapProps) => {
  const container = useRef(null);

  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: container.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    return () => map.remove();
  }, []);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div
        id={id}
        ref={container}
        style={{ height: "100%", width: "100%" }}
      ></div>
    </div>
  );
};

export default Map;
