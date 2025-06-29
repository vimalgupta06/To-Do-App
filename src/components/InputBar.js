import React from "react";
function InputBar({task,setTask,addTask}){
    return(
        <div className = "input-group mb-3">
            <input 
                type="text"
                className="form-control"
                placeholder="Enter a task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button className="btn btn-success" onClick={addTask}>
                Add
            </button>
        </div>
    );
}
export default InputBar;