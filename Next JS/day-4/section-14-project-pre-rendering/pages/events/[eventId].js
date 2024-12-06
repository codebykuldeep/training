import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getAllEvents, getEventById } from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

function EventDetailPage(props) {
  const {event} =props;

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context){
  const eventId =context.params.eventId
  const event =await getEventById(eventId);
  
  
  return {
    props:{
      event:event
    }
  }
}

export async function getStaticPaths() {
  const data = await getAllEvents();
  const path = data.map(event=>({params:{eventId:event.id}}))
  return{
    paths:path,
    fallback:true,
  }
}

export default EventDetailPage;
