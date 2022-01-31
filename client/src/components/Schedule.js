import React from 'react';

const Schedule = (props) => {
  return <div>
      <h2>Schedule</h2>
      <table>
        <tr>
            <th>Name</th>
            <th>Time</th>
            <th>Kind</th>
        </tr>  
      {props.schules.map(schedule => (
        <tr key={schedule._id}>
          <td>{schedule.name}</td>
          <td>{schedule.time}</td>
          <td>{schedule.kind}</td>
        </tr>
      ))}
      </table>
  </div>;
};

export default Schedule;
