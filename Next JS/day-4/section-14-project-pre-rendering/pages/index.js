import { getAllEvents, getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';
import { revalidatePath } from 'next/cache';

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
    },
    revalidate:10,
  }
}

export default HomePage;
