// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import {createBrowserRouter, json, RouterProvider} from'react-router-dom';
import EventsPage from './pages/EventsPage';
import EventDetailPage ,{loader as detailLoader} from './pages/EventDetailPage'
import NewEventPage,{action as submitFormAction} from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import RootElement from './RootElement';
import HomePage from './pages/HomePage';
import EventRoot from './pages/EventRoot';
import ErrorPage from './pages/Error';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<RootElement/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          index:true,
          path:'/',
          element:<HomePage/>,
        },
        {
          path:'events',
          element:<EventRoot/>,
          children:[
            {
              path:'',
              index:true,
              element:<EventsPage/>,
              loader:async ()=> {
                      const response = await fetch('http://localhost:8080/events');
                
                      if (!response.ok) {
                       throw json({message:'failed to fetch'},{status:500})
                      } else {
                        const resData = await response.json();
                        return resData.events;
                      }
                      
                    }
            },
            {
              path:':eventId',
              id:'event-detail',
              loader:detailLoader,
              children:[
                {
                  path:'',
                  element:<EventDetailPage/>,
                },
                {
                  path:'edit',
                  element:<EditEventPage/>,
                },
              ]
            }
            ,
            {
              path:'new',
              action:submitFormAction,
              element:<NewEventPage/>,
            },
            
          ]
        }
      ]
    }
  ])
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
