import React from 'react'
import { useDispatch } from 'react-redux';
import { toogleComplete } from '../redux/reducer';

const TodoItem= ({ id, template, complete }) => {
      const dispatch =useDispatch();
    const handleComplleteClick = () =>{
        dispatch(toogleComplete({id:id,complete: !complete}))
    }
    console.log(template);
	return (
		<li className='list-group-item'>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' checked={complete} onChange={handleComplleteClick} ></input>
					{template}
				</span>
				<button className='btn btn-danger'>Delete</button>
			</div>
		</li>
	);
};


export default TodoItem
