import React from "react";
import Bottom from "./Bottom";
import Top from "./Top";
import { overviewsArry } from "../json/overviews";
import image from '../../images/bg-tablet-pattern.svg';

const Body = () => {
  return (
    <div className="bodyMain">
        <img className='absolute' src={image} alt=""  />
      <Top />
      <div className="overviews">
        <h2>What they have said</h2>
        <div className="overviewsCard">
          {overviewsArry.map((val, ind) => {
            return (
              <Bottom name={val.name} comment={val.comment} img={val.img} key={ind}/>
            );
          })}
        </div>
        <div className='button'>
            <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Body;
