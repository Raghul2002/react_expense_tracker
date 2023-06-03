import './ExpenseItem.css'
import Date from './ExpenseDate'
function ExpenceItem(props){
    return (
        <>
            <div className="container">
                <div className = "dateContainer">
                    <Date date= {props.date}></Date>
                </div>
                <h2>{props.discription}</h2>
                <button type="button" class="btn btn-outline-danger btn-lg">{props.amount}</button>
            </div>
        </>
    );
}
export default ExpenceItem;