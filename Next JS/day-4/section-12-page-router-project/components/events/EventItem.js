
import classes from "./event-item.module.css";
import Button from "../ui/button";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";
export default function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(",", "/n");
  return (
    <li className={classes.item}>
      <img src={image} alt="" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h1>{title}</h1>
          <div className={classes.date}>
            <DateIcon/>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon/>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
            <Button link={`/events/${id}`}>
            <span>Explore Event</span>
            <span className={classes.icon}><ArrowRightIcon /></span>
            </Button>
            
          </div>
      </div>
    </li>
  );
}
