import React from 'react';
import svg from '../../images/illustration-intro.svg'

const HeaderDescription = () => {
  return (
    <div className="headerFlex">
      <div className='text'>
        <h1>Bring everyone together to build better product</h1>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view
        </p>
        <button className="headerBtn">Get Started</button>
      </div>
      <div className="image">
          <img src={svg} alt="" />
      </div>
    </div>
  );
};

export default HeaderDescription;
