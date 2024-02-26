import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const userData = useLoaderData(); //   const [userData, setUserData] = useState(null);
  //
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(
  //           "https://api.github.com/users/tusharaher20"
  //         );
  //         const data = await response.json();
  //         setUserData(data);
  //       } catch (error) {
  //         console.error("Error fetching GitHub data:", error);
  //       }
  //     };
  //
  //     fetchData();
  //   }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      {userData ? (
        <>
          <span>Github Followers: {userData.followers}</span>
          <img src={userData.avatar_url} alt="Git Picture" width={300} />
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}

export default Github;
export const githubinfoloader = async () => {
  const response = await fetch("https://api.github.com/users/tusharaher20");
  return response.json();
};
