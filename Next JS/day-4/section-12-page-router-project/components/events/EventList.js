import EventItem from "./EventItem";
import classes from './event-list.module.css'
export default function EventList(props) {
    const {items} = props;
    return (
    <ul className={classes.list}>
        {items.map(event =><EventItem key={event.id} {...event}/>)}
    </ul>
  )
}
