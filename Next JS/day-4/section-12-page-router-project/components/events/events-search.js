import classes from './event-search.module.css'
import btnClass from '../ui/button.module.css'

export default function EventsSearch(props) {
    function handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);

        const year = data.get('year');
        const month =data.get('month');
        console.log(year,month);
        props.onSearch(year,month);
    }
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.controls}>
            <div className={classes.control}>
                <label htmlFor="year">Year</label>
                <select name="year" id="year">
                    <option value="2021">2021</option>
                    <option value="2021">2022</option>
                </select>
            </div>
            <div className={classes.control}>
                <label htmlFor="month">Month</label>
                <select name="month" id="month">
                    <option value="1">Jan</option>
                    <option value="2">Feb</option>
                    <option value="3">Mar</option>
                    <option value="4">Apr</option>
                    <option value="5">May</option>
                    <option value="6">Jun</option>
                    <option value="7">Jul</option>
                    <option value="8">Aug</option>
                    <option value="9">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                </select>
            </div>

        </div>
        <button type='submit' className={btnClass.btn}>SEARCH</button>
    </form>
  )
}
