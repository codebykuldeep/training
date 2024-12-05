import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy_data";


export default function AllEventsPAge() {
    const events =getAllEvents();
    const router =useRouter();
    function findEventsHandler(year,month){
        const fullPath = `/events/${year}/${month}`

        router.push(fullPath);
    }
  return (
    <div>
        <EventsSearch onSearch={findEventsHandler}/>
        <EventList items={events}/>
    </div>
  )
}
