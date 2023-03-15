import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App(id) {
  const [add, setAdd] = useState([]);
  const [value, setValue] = useState("");
  const [toggle, setToggle] = useState(true);
  const [edit, setEdit] = useState(null);

  const handleonchange = (e) => {
    setValue(e.target.value);
  };

  const handleonclick = () => {
    if (!value) {
      alert("please fill the data");
    } else if (value && !toggle) {
      setAdd(
        add.map((element) => {
          if (element.id === edit) {
            return { ...element, name: value };
          }
          return element;
        })
      );

      setValue("");
      setToggle(true);
      setEdit(null);


    } else {
      const allNewData = { id: new Date().getTime().toString(), name: value };
      setAdd([...add, allNewData]);
      setValue("");
    }
  };

  

  const removeitems = (index) => {
    const deletion = add.filter((element) => {
      return index != element.id;
    });
    setAdd(deletion);
  };

  const editonclick = (id) => {
    let newEditItem = add.find((element) => {
      return element.id == id;
    });
    setValue(newEditItem.name);
    setToggle(false);
    setEdit(id);
  };

  return (
    <div>
      <div className="container">
        <h1 className="todo">Todo List</h1>
        <input className="Text" value={value} onChange={handleonchange} />
        <div className="button">
          <a className="btn1">
            {toggle ? (
              <h1 className="add" onClick={handleonclick}>
                Add
              </h1>
            ) : (
              <h1 className="add" onClick={handleonclick}>
                Edit
              </h1>
            )}
          </a>
        </div>
      </div>

      <div className="task">
        {add.map((element) => {
          return (
            <div className="container1" key={element.id}>
              <h1 className="word">{element.name}</h1>
              <div className="divide">
              <a className="outer">
                <img
                  src="delete.png"
                  className="delete"
                  onClick={() => removeitems(element.id)}
                />
              </a>
              <a className="outer" onClick={() => editonclick(element.id)}>
                <img src="edit.png" className="done" />
              </a>
              </div>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
}
