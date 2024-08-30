import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">Todo List</h3>
      {
        props.todos.map((todo)=>{
          return <TodoItem todo={todo} key={todo.number} onDelete={props.onDelete}/>
        })
      }
    </div>
  )
}
