import React, { useState } from "react";
import "./Component.css";

function Form() {
  const [items, setItems] = useState([]);
  const [newWork, setNewWork] = useState("");

  const OnChangeHandler = (event) => {
    setNewWork(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newItem = { label: newWork, value: newWork, number: items.length + 1 };
    setItems((prevItems) => [...prevItems, newItem]); 
    setNewWork("");
  };

  const DeleteHandler = (event) => {
    const workId = event.target.id;
    const updatedItems = [...items];
    updatedItems.splice(workId, 1);
    setItems(updatedItems);
  };
  

  return (
    <>
      <div className="FormContainer">
        <form onSubmit={submitHandler} className="ToDoForm">
          <label htmlFor="to_do" className="label">
            Add Works
          </label>
          <textarea
            id="to_do"
            placeholder="Please mention your work in brief"
            onChange={OnChangeHandler}
            value={newWork}
            required
            className="textarea"
          />
          <input type="submit" value="Submit" className="button" />
        </form>
      </div>
      <div className=" workContainer"  >
        {items.map((works, index) => {
          return (
            <div className="list" key={index}>
              <input type="text" readOnly value={works.value} className="works"/>
              <input
                type="submit"
                value="Delete"
                className="delete"
                id={index}
                onClick={DeleteHandler}
              />
            </div>
          );
        })}
      </div>
      <div className="counter">
        <h5>{items.length} PENDING</h5>
      </div>
    </>
  );
}

export default Form;
