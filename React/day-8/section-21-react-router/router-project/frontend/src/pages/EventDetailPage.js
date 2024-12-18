import React from 'react'
import { json, useLoaderData, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem'


export default function EventDetailPage() {
  const data = useRouteLoaderData('event-detail');
  const event =data.event;
  
  
  return (
    <>
    <EventItem event={event}/>
    </>

  )
}


export async function loader({request,params}) {
  const id = params.eventId;
  const response = await fetch('http://localhost:8080/events/'+id);

  if(!response.ok){
    throw json({message: 'Could not fetch details for selected events.'},{
      status:500,
    });
  }else{
    return response;
  }
}
