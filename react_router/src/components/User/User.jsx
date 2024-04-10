import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <div className="flex justify-center">
      <h1 className="text-xl hover:text-3xl duration-500">Params: {userId}</h1>
    </div>
  );
}

export default User;
