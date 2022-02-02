import React, { useState } from 'react';
import Physician from './Physician';
import Schedule from './Schedule';
import { QUERY_PHYSICIAN, QUERY_SCHEDULE } from '../utils/queries';
import { ADD_SCHEDULE } from '../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';

const Main = () => {
const [selectedPhysician, setSelectedPhysician] = useState('61f84b8fa20e8b1a30f442c3');

  const physicianData = useQuery(QUERY_PHYSICIAN);
  const physicians = physicianData.data?.physicians || [];
  const scheduleData = useQuery(QUERY_SCHEDULE, { variables: { "physician": selectedPhysician}});
  const schedules = scheduleData.data?.schedules || [];

  const [addSchedule, { error }] = useMutation(ADD_SCHEDULE);

  const physicianChangedHandler = (physicianId) => {
    setSelectedPhysician(physicianId);
  }

  const scheduleAddHandler = async (name, time, kind, physician) => {
    await addSchedule({
      variables: { "name": name, "time": time, "kind": kind, "physician": physician },
      refetchQueries: [{query: QUERY_SCHEDULE, variables: { "physician": physician} }],
    });
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
          ) : (<Schedule schedules={schedules} physicianId={selectedPhysician} onScheduleAdded={scheduleAddHandler}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
