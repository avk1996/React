import React from "react";
import { useLoaderData, Link } from "react-router-dom";

function Careers() {
  const careers = useLoaderData();
  return (
    <div>
      {careers.map((career) => (
        <div>career.name</div>
      ))}
    </div>
  );
}

export default Careers;

export const careersLoader = async () => {
  const response = await fetch("https://reqres.in/api/unknown");
  return response.json();
};
