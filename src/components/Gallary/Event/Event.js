import React, {useState} from "react";
import "../Gallary.css"
import catering from "../../../assets/images/catering.jpg";
import photography from "../../../assets/images/photography.jpg";
import decor from "../../../assets/images/decor.jpg";
import birthday from "../../../assets/images/birthday.jpg";
import birthday2 from "../../../assets/images/birthday7.jpg";
import wedding from "../../../assets/images/wedding.jpg";
import event from "../../../assets/images/event.jpg";
import { BsFillBackspaceReverseFill } from "react-icons/bs";
function Event() {
    const data = [
        {
          id: 1,
          imgsrc: catering,
        },
        {
          id: 2,
          imgsrc: photography,
        },
        {
          id: 3,
          imgsrc: decor,
        },
        {
          id: 4,
          imgsrc: birthday,
        },
        {
          id: 5,
          imgsrc: birthday2,
        },
        {
          id: 6,
          imgsrc: wedding,
        },
        {
          id: 7,
          imgsrc: event,
        },
      ];
      const [model, setModel] = useState(false);
      const [tempImgSrc, setTempImgSrc] = useState('')
    
      const getImg = (imgsrc) =>{
        setTempImgSrc(imgsrc);
        setModel(true);
      }
    return (
        
        <>
        <div className={model ? "model open" : "model"}>
      <img src={tempImgSrc} alt="dd" /> 
     <BsFillBackspaceReverseFill  onClick={()=> setModel(false)}/>
    </div>
           
           
        <div className="gallaryMarginTop">
           <h2 className="text-center ">Event Gallary</h2>
         <div className="gallary">
           {data.map((item, index) => {
             return (
                 <div className="pics" key={index} onClick={()=>getImg(item.imgsrc)} > 

               <img
                 src={item.imgsrc}
                 alt="Birthday Img"
                 style={{ width: "100%" }}
                 />
                 </div>
             );
           })}
         </div>
         </div>
      
 </>
       
    )
}

export default Event
