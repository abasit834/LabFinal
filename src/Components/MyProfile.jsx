// MyProfile.js
import React from "react";
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const data = useSelector((state) => {
    return state.Profile; // Use the correct slice name
  });

  return (
    <>
      <h1>My Rockets</h1>
      <ul>
        {data.map((rocket, index) => (
          <li key={index}>{rocket}</li>
        ))}
      </ul>
    </>
  );
};

export default MyProfile;
