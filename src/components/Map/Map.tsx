import React from "react";

export interface MapProps {
  id: string;
}

const Map = ({ id }: MapProps) => {
  return <span>Map with {id} id created!</span>;
};

export default Map;
