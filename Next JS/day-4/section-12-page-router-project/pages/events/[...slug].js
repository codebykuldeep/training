import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy_data";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/results-title";
import ErrorAlert from "../../components/events/error-alert";

export default function FilteredEventsPage() {
  const router =useRouter();
  const filterData = router.query.slug;

  if(!filterData){
    return <p className="center">Loading....</p>
  }
  const [year,month] =filterData;
  const numYear =+year;
  const numMonth =+month;

  if(isNaN(numYear) || isNaN(numMonth) || numYear >2030 || numYear <2021 || numMonth <1 || numMonth >12){
    return <ErrorAlert>Invalid Filter.Request page with correct queries</ErrorAlert>
  }

  const filteredEvents =getFilteredEvents({
    year:numYear,
    month:numMonth
  })

  if(!filteredEvents || filteredEvents.length===0){
    return <ErrorAlert>No events found...</ErrorAlert>
  }

  const date =new Date(numYear,numMonth-1);
  return (
    <>
      <ResultsTitle date={date}/>
      <EventList items={filteredEvents}/>
    </>
  )
}
