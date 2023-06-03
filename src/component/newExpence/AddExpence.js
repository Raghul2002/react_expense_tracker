import Card from "../UI/BrownCard";
import { useState } from "react";
function AddExpence(props) {
  const [value, setValue] = useState({
    date: "",
    discription: "",
    amount: "",
  });
  const onSubmit = (event) => {
    event.preventDefault();
    setValue({date:" ",discription:"",amount:""})
    props.onAdd(value);
    console.log(value);
    
  };
  const discriptionHandler = (event) => {
    console.log(event.target.value);
    setValue((prevVal) => {
      return { ...prevVal, discription: event.target.value };
    });
  };
  const amountHandler = (event) => {
    console.log(event.target.value);
    setValue((prevVal) => {
      return { ...prevVal, amount: event.target.value };
    });
  };
  const dateHandler = (event) => {
    console.log(event.target.value);
    setValue((prevVal) => {
      return { ...prevVal, date: event.target.value };
    });
  };
  return (
    <Card>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Add date</label>
          <input
            type="date"
            className="form-control"
            value={value.date}
            onChange={dateHandler}
            // onAdd = {onChange}
            //   id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Add discription</label>
          <input
            type="text"
            value={value.discription}
            className="form-control"
            onChange={discriptionHandler}
            //   id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Add amount</label>
          <input
          value={value.amount}
            onChange={amountHandler}
            type="number"
            min="0.1"
            step="0.1"
            className="form-control"
            //   id="exampleFormControlInput1"
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Add
        </button>
      </form>
    </Card>
  );
}
export default AddExpence;
