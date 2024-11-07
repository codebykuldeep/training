import React from 'react';
import EventNavigation from '../components/EventsNavigation'
import { Outlet, useNavigation } from 'react-router-dom';

function EventRoot() {
  const navigation  = useNavigation();
  
  return (
    <>
        <EventNavigation/>
        {navigation.state === 'loading' ? <p>Loading ... </p> : <Outlet/>}
    </>
  )
}

export default EventRoot