import React, { useState } from 'react';
import Physician from './Physician';
import Schedule from './Schedule';
import { QUERY_PHYSICIAN, QUERY_SCHEDULE } from '../utils/queries';
import { useQuery } from '@apollo/client';

const Main = () => {
const [selectedPhysician, setSelectedPhysician] = useState('61f84b8fa20e8b1a30f442c3');

  const physicianData = useQuery(QUERY_PHYSICIAN);
  const physicians = physicianData.data?.physicians || [];
  const scheduleData = useQuery(QUERY_SCHEDULE, { variables: { "physician": selectedPhysician}});
  const schedules = scheduleData.data?.schedules || [];

  const physicianChangedHandler = (physicianId) => {
    setSelectedPhysician(physicianId);
  }

  return (
    <div>
      <div className='flex-row'>
        <div className='col-4'>
        {physicianData.loading? (
            <div>Loading...</div>
          ) : (<Physician physicians={physicians} onPhysicianChanged={physicianChangedHandler} />
          )}
        </div>
        <div className='col-6'>
        {scheduleData.loading? (
            <div>Loading...</div>
          ) : (<Schedule schedules={schedules}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
