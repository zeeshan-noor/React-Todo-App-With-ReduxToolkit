import React  from 'react'
import { useSelector } from 'react-redux';
import TodoItem from './todoItem';

function TodoList() {
   
    const todos = useSelector((state)=>state.todos)
   
  
    return (
        <div>
            {todos.map((ind)=>{
                console.log(ind.tempalte);
                return(
                    <>
                <TodoItem id={ind.id} title={ind.tempalte} completed={ind.complete} />
                    </>

                )
            })}
        </div>
    )
}

export default TodoList
