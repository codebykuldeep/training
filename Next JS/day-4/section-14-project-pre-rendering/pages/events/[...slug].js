import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

function FilteredEventsPage(props) {
  const {events,hasError,numMonth,numYear} =props
  if (hasError) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  

  if (!events || events.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </Fragment>
  );
}


// export async function getStaticProps(context){
//   const eventId =context.params.eventId
//   const event =await getEventById(eventId);
  
  
//   return {
//     props:{
//       event:event
//     }
//   }
// }

// export async function getStaticPaths() {
//   const data = await getAllEvents();
//   const path = data.map(event=>({params:{eventId:event.id}}))
//   return{
//     paths:path,
//     fallback:true,
//   }
// }
export async function getServerSideProps(context) {
  const {params} =context;
  const filterData = params.slug;
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props:{
        hasError:true,
      }
    }
  }

  const events =await getFilteredEvents({numYear,numMonth});
  console.log(events);
  
  return{
    props:{
      events:events,
      hasError:false,
      numMonth:numMonth,
      numYear:numYear,
    }
  }
}

export default FilteredEventsPage;
