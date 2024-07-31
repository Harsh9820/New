import React from 'react'

function Tasks() {
    const tasks = [
        {id: 2, desc: 'First task', done: true},
        {id: 3, desc: 'Second task', done: false},
        {id: 4, desc: 'Third task', done: false}
    ]
  return (
    <>
        <div>
            <ul>{
                tasks.map((task) => (
                    <div className='tts'>
                    <li>{task.desc}</li>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                ))
            }
            </ul>
        </div>
    </>
  )
}

export default Tasks