/* eslint-disable no-unreachable */
/* eslint-disable no-self-compare */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addTodo, deleteTodo, editTodo, removeTodo } from "../action/Action";

function Todo() {
    const [toggelSubmit,setToggelSubmit] = useState(true);
    const [inputdata, setInputData] = useState("");
    const [editIndex, setEditIndex] = useState(-1);
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todoReducers.list);
    
    console.log(list)
const onEdit = (index) => {
    const seeditData = list.find((elem) => {
        return index === elem.id;
      
    });
    console.log("seeditData" , seeditData)
    setInputData(seeditData.name);
    setEditIndex(seeditData.id);
    setToggelSubmit(false);
};


  return (
    <div className="main-div">
      <div className="child-div">
        <figure></figure>
        <div className="addItems">
          <input
            type="text"
            value={inputdata}
            onChange={(event) => setInputData(event.target.value)}
            placeholder="add items.."
          />


          {
              toggelSubmit ?  <i
              className="fa fa-plus add-btn"
              title="Add Item"
              onClick={() => dispatch(addTodo(inputdata),setInputData('') )}
            ></i>  : 

            <i
              className="fas fa-edit add-btn"
              title="Add Item"
              onClick={() => dispatch(editTodo(inputdata,editIndex),setInputData(''))}
            ></i> 

          }
         
        </div>

        <div className="showItems">
          {
          list.map((elem) => 
          {
              return (
              
                <div className="">
                  <div className="eachItem" key={elem.id}>
                    <h1>{elem.name}</h1>
                    <div className="todo-btn">
                    <i
                      className="fas fa-edit add-btn"
                      onClick={() => onEdit(elem.id)}
                      title="Edit Item"
                    >
                    
                    </i>
                      <i
                        className="fas fa-trash-alt add-btn" onClick={()=>dispatch(deleteTodo(elem.id))}
                        title="Delete Item"
                      ></i>
                    </div>
                  </div>
                </div>
              )
           
              
          }
          )}
        </div>

        <div className="eachItems">
          <button className="btn effect04" onClick={()=> dispatch(removeTodo())} data-sm-link-text="Remove All">
            <span>Chek List</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
