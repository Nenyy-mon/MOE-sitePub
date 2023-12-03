/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { SliderDatBgd } from "../Sliderbg.jsx"
import './sliders.css'

function Sliders({slide}) {
  const [current, setCurrent] = useState(0);
  const length = slide.length;


 
    return (
       <div className="slider-component">
        
          {SliderDatBgd.map((slide,index) => {
          return (
          <div
            key={index}>
            {index === current && (<img src={slide.src} alt="backgroundImage" className="image"/>)}
          </div>
        )
       })}
       </div>
    )
}
export default Sliders