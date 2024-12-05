import { getAllEvents, getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';

function HomePage(props) {
  
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps(){
  const events =await getFeaturedEvents();
  
  
  return {
    props:{
      events:events
    }
  }
}

export default HomePage;
