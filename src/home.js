
import React, { useState } from 'react'
import "./home.css"
import axios from "axios";
import {useOnKeyPress} from './hooks/useOnKeyPress';
const  Home = () => {
    const[photo,setPhoto]=useState("");
    const[cleintId,setClientId]=useState("wBRUTjxZqyVP3Fagv0Aa3G3ktF8x_8oFj3N4VGtbBKk")
    const [result,setResult] = useState([]);
    
    function handleChange(e){
setPhoto(e.target.value);
    }
    function handleSubmit(e){
console.log(photo);

const url="https://api.unsplash.com/search/photos?query="+photo+"&client_id="+cleintId;
//const url="https://in.pinterest.com/search/pins/?q=anime&rs=typed&term_meta[]=anime%7Ctyped"

axios.get(url).then(response =>{
    console.log(response);
    setResult(response.data.results);
})
setPhoto('');
    }
    useOnKeyPress(handleSubmit,'Enter');
  return (
      <>

    <div className="topbar">
        <h2 className="title">Unsplash Image Search</h2>
        <input onChange={handleChange} value={photo} type="text" name="photo" placeholder="Search for photos" />
        <button className="submit" onClick={handleSubmit} onKeyDown={handleSubmit}>Search</button>
   
    </div>
    <div className="image-gallary">
    {result.map((photo)=>(
        <img  className="image" src={photo.urls.small} />
    ))}
    </div>
      </>
  )
}

export default  Home