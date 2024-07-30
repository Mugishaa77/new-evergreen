import React, { useState } from 'react';
import './About.css';

export default function About () {

const [activeIndex, setActiveIndex] = useState(null);
  
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

     return (
        <div className="about">
            <div className="container">
                <h2>About Us</h2>
                  <div className="row">
                    <div className="col-6">
                       {/* Will definitely revisit the about section with help from the team */}

                    <h4  className={activeIndex === 0 ? "active" : ""}
              onClick={() => handleClick(0)}> Our Story </h4>
                    <p className={activeIndex === 0 ? "active" : ""}>
                     Evergreen Farms was started as a small scale vegetable home orchard in Nyalenda slums in
                   Kisumu, Kenya by Leisley Odhiambo (Odhis). 
                    It became Evergreen Farms when Odhis decided
                     to take it up as a full-time business. (to be updated with a vision/goal) 
                     </p>

                     <h4 className={activeIndex === 1 ? "active" : ""}
              onClick={() => handleClick(1)}>Our Team</h4>
                    <p className={activeIndex === 1 ? "active" : ""}> Odhis started a small mentorship group whose agenda was to inspire the young men and women of
                         Nyalenda where he met Lavender, Judy and Eric, who all joined
                          hands to become, <strong>the Green Team (Founding Four)</strong> with whom
                    they started what has come to be known as Evergreen Farms.
                    </p>
                </div>
                <div className="col-6">


                    <h4 className={activeIndex === 2 ? "active" : ""}
              onClick={() => handleClick(2)}>We Believe</h4>
                   <p className={activeIndex === 2 ? "active" : ""}>“...We make
a living out
of what we
get, but we
make life,
out of what
we give...”</p>
                   <h4 className={activeIndex === 3 ? "active" : ""}
              onClick={() => handleClick(3)}>How we operate</h4>
                <p className={activeIndex === 3 ? "active" : ""}>Evergreen's Mobile Garden innovation creates a direct nexus between farmers,
grocers and the end-consumers hence increasing the farmer's and grocer's profits while
reducing the cost of food by almost half.</p>

<h4 className={activeIndex === 4 ? "active" : ""}
              onClick={() => handleClick(4)}>Our history</h4>
<p  className={activeIndex === 4 ? "active" : ""}>to be continued later...</p>
                </div>
                
             </div>
<h4 className={activeIndex === 5 ? "active" : ""}
              onClick={() => handleClick(5)}>Our Vision</h4>
<p className={activeIndex === 5 ? "active" : ""}>Farmers will sell their produce to grocers at their desired prices,
     The grocers also will in turn sell to the ultimate consumers at fairer prices, making
<strong>food affordable</strong> altogether. 
It also <strong>increases profits</strong> to both the farmer and the grocer,
resulting in <strong>better living standards, and investment in farming as an economic activity within
Africa.</strong> 
</p>
            </div>
        </div>
    );
}