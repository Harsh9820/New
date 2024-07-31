import React, { useState } from 'react'
let nextId = 2
const initialTasks = [
    {id: 0, text: 'learn react', done: true},
    {id: 1, text: 'learn guitar', done: false},
]
function Rev() {
    const [tasks, setTasks] = useState(initialTasks);
    const handleChange = (task) => {
        setTasks(
        tasks.map((t) => {
            if(t.id === task.id){
                return task;
            }
            else{
                return t;
            }
        }));
    }

    const handleDelete = () => {
        
    }
    return (
        <>
            <TodoList tasks={initialTasks} changeTask={handleChange} deleteTask={handleDelete}/>
        </>
    )
}

function TodoList({tasks, changeTask, deleteTask}){
    return(
        <ul>
        {tasks.map((task) => (
            <li key = {task.id}>
                <Task task={task} change={changeTask} onDelete={deleteTask}/>
            </li>
            )
        )}
        </ul>
    )
}

function Task({task, change, onDelete}) {
    const [edit, setEdit] = useState(false)
    let taskCo;
    if(edit){
        taskCo = (
            <>
                <input type='text' value={task.text} 
                onChange = {(e) => {
                    change({
                        ...task,
                        text: e.target.value,
                    });
                }}
                />
                <button onClick={() => setEdit(false)}>Save</button>
            </>
        )
    }
    else{
        taskCo = (
            <>
                <p>{task.text}</p>
                <button onClick={() => setEdit(true)}>Edit</button>
            </>
        )
    }

    return (
        <label>
          <input
            type="checkbox"
            checked={task.done}
            onChange={(e) => {
              change({
                ...task,
                done: e.target.checked,
              });
            }}
          />
          {taskCo}
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </label>
    );
}
export default Rev