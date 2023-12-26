import React from "react";
import { useSelector } from "react-redux";

const MissionsPage =()=>{
const data= useSelector((state)=>{
        return state.missionSlice;
});

return (
    <div>
    {data.map((item) => (
        <div key={item.mission_id}>
        <span>{item.misson_id}</span>
        <br />
        <h2>{item.mission_name}</h2>
        <p>{item.description}</p>
        <button id="btn">Join Mission</button>

        </div>
    ))}
    </div>
);
};

export default MissionsPage;