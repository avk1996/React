import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     const resp = fetch("https://api.github.com/users/avk1996")
  //       .then((result) => {
  //         return result.json();
  //       })
  //       .then((result) => {
  //         console.log(`from github api: ${result}`);
  //         setData(result);
  //       })
  //       .catch((err) => {
  //         console.log(`Error recived: ${err}`);
  //       });
  //   }, []);

  return (
    <div className="flex flex-col justify-center align-middle">
      <div className="w-fit m-4 p-3 rounded-full bg-green-400 text-white text-3xl duration-200 hover:bg-white hover:text-green-700">
        Github followers: {data?.followers}
      </div>
      <div className="w-fit m-4 p-3 rounded-full bg-green-400 text-white text-3xl duration-200 hover:bg-white hover:text-green-700">
        Follow me on : {data?.html_url}
      </div>
    </div>
  );
}

export default Github;

export const exportGithubInfo = async () => {
  const response = await fetch("https://api.github.com/users/avk1996");

  return response.json();
};
