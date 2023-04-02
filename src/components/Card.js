import React from "react"
const Card = (props) => {

    return <div className="card-sub">
               <div className="text-card">
                  <h1>{props.name}</h1>
                  <img src={props.img} alt={props.alt} />
              </div>
            <div className="contact-details">
                <p>{props.tel}</p>
                <p >{props.email}</p>
            </div>
           </div>
   


       


    
}
export default Card