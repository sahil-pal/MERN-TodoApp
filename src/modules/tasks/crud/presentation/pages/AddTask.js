import { useState, useRef, useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Task from "../../domain/model/Task";
import { taskContext } from "../../provider/TaskContext";

export const AddTask = () => {

    // const qs = props.location.search;
    // const queryStringObj = new URLSearchParams(qs);

    const [params] = useSearchParams();
    let flag = "";
    params.forEach((e)=> flag = e);

    let taskID = 0;
    let name = useRef('');
    let importance = useRef('');
    let date = useRef('');
    let color = useRef('');
    const TaskContext = useContext(taskContext);
    // navigation hook
    const navigate = useNavigate();

    const getTaskID = () => ++taskID;
    const validateForm = () =>{
        let e = {};
        let isValid = true;        
        if(name.current.value.length === 0){
            e.name = "Name field cannot be empty!";
            isValid = false;
        }
        else{
            e.name = "";
        }
        if(importance.current.value.length === 0){
            e.impt = "Importance field cannot be empty!";
            isValid = false;
        }
        else{
            e.impt = "";
        }
        if(date.current.value.length === 0){
            e.date = "Date field cannot be empty!";
            isValid = false;
        }
        else{
            e.date = "";
        }
        (isValid) ? saveData() : setErrors(e);

        // move to view
        navigate("/view/C",{
            
        });
    }
    const saveData = () => {
        let id = getTaskID();
        let nameData = name.current.value;
        let imptData = importance.current.value;
        let dateData = date.current.value;
        let colorData = color.current.value;
        let task = new Task(id,nameData,imptData,dateData,colorData);
        TaskContext.tasks.push(task);
        clearForm();
    }
    const clearForm = () =>{
        setErrors({});
        name.current.value = "";
        importance.current.value = "";
        date.current.value = "";
    }
    const [errors, setErrors] = useState({});
    
    return (
        <div>
            <h1 className="h2 border-bottom p-2">{flag === "a" ? "Add" : "Update"} Task</h1>
            <br/>
            <div className="form-group m-2">
                <label className="p-2">ID</label>
                <input name="id" className="form-control" value={taskID} readOnly/>
            </div>
            <div className="form-group m-1">
                <label className="p-1">Name</label>
                <input ref={name} name="name" className="form-control" placeholder="Type Task Name Here" type="text"/>
                <span className="ps-1 error-text">{errors.name}</span>
            </div>
            <div className="form-group m-1">
                <label className="p-1" >Importance</label><br/>
                <select ref={importance} name="importance" id="impt" className=" p-2">
                    <option value=""> -- Select Importance -- </option>
                    <option value="low"> Low </option>
                    <option value="moderate"> Moderate </option>
                    <option value="high"> High </option>
                </select><br/>
                <span className="ps-1 error-text">{errors.impt}</span>
            </div>
            <div className="form-group m-1">
                <label className="p-1" >Date</label>
                <input ref={date} name="date" className="form-control" type="date"/>
                <span className="ps-1 error-text">{errors.date}</span>
            </div>
            <div className="form-group m-1">
                <label className="p-1">Color</label>
                <input ref={color} name="color" className="form-control" type="color"/>
            </div>
            <div className="row justify-content-center m-1 p-2">
                <div className="col">
                    <button className="btn btn-md btn-dark" onClick={validateForm}>ADD</button>
                </div>
                <div className="col">
                    <button className="btn btn-md btn-info" onClick={clearForm}>CLEAR</button>
                </div>
            </div>
        </div>

    );
}