import React, {useState} from 'react';

const Schedule = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredTime, setEnteredTime] = useState('');
  const [enteredKind, setEnteredKind] = useState('');

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const timeChangeHandler = (event) => {
    setEnteredTime(event.target.value);
  };

  const kindChangeHandler = (event) => {
    setEnteredKind(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    props.onScheduleAdded(enteredName, enteredTime, enteredKind, props.physicianId);

    setEnteredName('');
    setEnteredTime('');
    setEnteredKind('');
  };


  return <div>
      <div>
        <h2>Schedule</h2>
      </div>
      <div>
      <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>Name</label>
          <input type='text' value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div>
          <label>Time</label>
          <input type='text' value={enteredTime} onChange={timeChangeHandler} />
        </div>
        <div>
          <label>Kind</label>
          <input type='text' value={enteredKind} onChange={kindChangeHandler} />
        </div>
      </div>
      <div>
        <button type='submit'>Add Schedule</button>
      </div>
    </form>
      </div>
      <div>
      <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Time</th>
            <th>Kind</th>
        </tr> 
        </thead>
        <tbody>
      {props.schedules.map(schedule => (
        <tr key={schedule._id}>
          <td>{schedule.name}</td>
          <td>{schedule.time}</td>
          <td>{schedule.kind}</td>
        </tr>
      ))}
      </tbody>
      </table>
      </div>
      
  </div>;
};

export default Schedule;
