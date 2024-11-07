import React from 'react';
import EventForm from '../components/EventForm'
import { json, useRouteLoaderData } from 'react-router-dom';

export default function EditEventPage() {
  const {event} = useRouteLoaderData('event-detail')
  return (
    <>
    <EventForm event={event} />
    </>
  )
}

