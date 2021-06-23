import React, { useState } from 'react'
import "./TourList.scss"
import Tour from '../Tour/Tour'
import { tourdata } from "../tourdata"


function TourList() {
   const [items, setItems] = useState(tourdata); 

   const removeTour = (id) => {
    const newTours = items.filter((tour) => tour.id !== id)
    setItems(newTours)
  }
  
    return (
        
        <div>
            <section className="tourlist">
               {items.map(item =>{
                   return <Tour key={item.id} item={item} removeTour={removeTour}/>
                   ;
               })}
            </section>
        </div>
    )
}

export default TourList;
