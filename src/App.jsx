import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ExpenceItem from "./component/Expence/ExpenceItem";
import Card from "./component/UI/BrownCard";
import AddExpence from "./component/newExpence/AddExpence";
import ExpenceFilter from "./component/ExpenceFilter/ExpenceFiler";

function App() {
  const items = [
    {
      id: 1,
      date: new Date(2001, 3, 21),
      discription: "Pen To Write",
      amount: "100",
    },
    {
      id: 2,
      date: new Date(2011, 31, 212),
      discription: "To Write",
      amount: "50", 
    },
  ];
  const onAddingNewObject = (entity) => {
    const data = { ...entity, id: Math.random().toString() };
    console.log("App.jsx" + data.discription);
  };
  return (
    <>
      <AddExpence onAdd={onAddingNewObject}></AddExpence>
      <ExpenceFilter></ExpenceFilter>
      <Card>
        {items.map((item) => (
          <ExpenceItem
            date={item.date}
            discription={item.discription}
            amount={item.amount}
            key={item.id}
          ></ExpenceItem>
        ))}
      </Card>
      <ExpenceFilter></ExpenceFilter>
    </>
  );
}

export default App;
