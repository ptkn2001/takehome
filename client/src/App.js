
import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Physician from './components/Physician';
import Schedule from './components/Schedule';
import { QUERY_PHYSICIAN, QUERY_SCHEDULE } from './utils/queries';
import { useQuery } from '@apollo/client';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {

  const [selectedPhysician, setSelectedPhysician] = useState('61f84eda5304920dccd8db64');

  const physicianData = useQuery(QUERY_PHYSICIAN);
  const physicians = physicianData.data?.physicians || [];
  const scheduleData = useQuery(QUERY_SCHEDULE, { variables: { "physician": selectedPhysician}});
  const schedules = scheduleData.data?.schedules || [];

  const physicianChangedHandler = (physicianId) => {
    setSelectedPhysician(physicianId);
  }

  return (
    <div>
      <h1>Notible</h1>
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
          <Schedule />
        </div>
      </div>
    </div>
  );
}

export default App;
