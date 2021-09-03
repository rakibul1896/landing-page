import React from 'react';

const Top = () => {
  return (
    <div className='flex'>
      <div className="bodyTextOne">
        <h2>What's different about Manage?</h2>
        <p>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="bodyTextTwo">
        <div className="first textContainer">
          <h6>
            <span className='span'>01</span> Track company-wide progress
          </h6>
          <p>
            See hoe your day-to-day tasks fit into the wider vision.Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
        </div>
        <div className="two textContainer">
          <h6>
            <span className='span'>02</span> Advance build-in reports
          </h6>
          <p>
            Set internal delivery estimate and track progress toward company
            goals. Our customizable dashboard helps you build out the reports
            you need to keep key stakeholder informed.
          </p>
        </div>
        <div className="three textContainer">
          <h6>
            <span className='span'>03</span> Everything you need in one place
          </h6>
          <p>
            Stop jumping from one service to another to communication, store
            files, track tasks and share documents. Manage offers an all-in-one
            team productivity solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Top;
