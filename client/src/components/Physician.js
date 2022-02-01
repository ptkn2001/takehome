import React from 'react';

const Physician = (props) => {

    const physicianClickHandle = (event) => {
        props.onPhysicianChanged(event.target.attributes['physicianid'].value);
    }

  return <div>
      <h2>Physicians</h2>
      <ul>
        {props.physicians.map((physician) => (
            <li key={physician._id} physicianid={physician._id} onClick={physicianClickHandle}>{physician.name}</li>
        ))}
      </ul>
  </div>;
};

export default Physician;
