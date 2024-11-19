import { Link, Outlet ,useParams,useNavigate} from 'react-router-dom';

import Header from '../Header.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteEvent, fetchEvent, queryClient } from '../http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EventDetails() {
  const navigate = useNavigate();
  const {id} = useParams();
  console.log(id);

  const {data,isPending,isError,error} = useQuery({
    queryKey:['events',id],
    queryFn:({signal})=>fetchEvent({signal,id}),

  })

  const {mutate} =useMutation({
    mutationFn:deleteEvent,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:['events'],refetchType:'none'});
      navigate('/events');
    }
  })

  function handleDelete(){
    mutate({id});
  }
  
  
  
  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      
      
        <article id="event-details" className='center'>
          {
            isPending &&(
              <LoadingIndicator />
            )
          }
          {
            isError && (
              <ErrorBlock title={'Failed to load event Detail'}
              message={'Please try again later'}></ErrorBlock>
            )
          }
        {data && (
          <>
          <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={handleDelete}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt="" />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>{`${data.date} ${data.time}`}</time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
          </>
        )}
      </article>
      
    </>
  );
}
