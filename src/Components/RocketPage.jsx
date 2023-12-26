import React, { useState, useEffect } from 'react';
import { addToRocket} from '../Store/Slices/ApiFetchSlice';
import { useDispatch } from "react-redux";
import "./RocketPage.css" 
import { useSelector } from 'react-redux';
import { addToMission } from '../Store/Slices/ApiFetchSlice';
import { addToProfile } from '../Store/Slices/ApiFetchSlice';

const RocketPage = () => {
const [data, setData] = useState([]);
const dispatch = useDispatch();

useEffect(() => {
    const fetchData = async () => {
    const apiData = await fetch('https://api.spacexdata.com/v4/rockets');
    const jsonData = await apiData.json();
    setData(jsonData);
    dispatch(addToRocket(jsonData));
    const missionApi=await fetch('https://api.spacexdata.com/v3/missions');
    const jsonData2= await missionApi.json();
    dispatch(addToMission(jsonData2));
    };
    fetchData();
}, [dispatch]);


const retrieveData= useSelector((state)=>{
    return state.ApiSlice;
})
const add=(payload)=>{
    console.log("Add called");
    dispatch(addToProfile(payload));
}

return (
    <div>
    {retrieveData.map((item) => (
        <div key={item.id}>
        <br />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <img src={item.flickr_images} alt="no-image" />
        <button id="btn" onClick={()=>{add(item.name)}}>
            Reserve Rocket </button>
        <button id="btn2">Cancel Reservation</button>
        </div>
    ))}
    </div>
);
};

export default RocketPage;
