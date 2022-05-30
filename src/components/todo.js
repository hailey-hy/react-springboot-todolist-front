import React from 'react'

const Todo = (props) => {
  return (
    <div className='todo' key={props.todo.id}>
              <h3>
                  <label
                  className={props.todo.completed ? "completed" : null}
                  onClick={() => handleClick}>
                    TODO {props.todo.todoName}
                  </label>
                  <label onClick={handleDelete}>&nbsp;&nbsp;&nbsp;❌</label>
                </h3>
            </div>
  )
}

export default Todo