import React from 'react'

import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/reducer';


function AddTodoForm() {

    const dispatch = useDispatch();
    const [value, setValue] = React.useState('');

	const onSubmit = (event) => {
		event.preventDefault();
        dispatch(addTodo({
            template:value,
        }))
		console.log('user entered: ' + value);
	};
    return (
        <div>


<form onSubmit={onSubmit} className='form-inline mt-3 mb-3 '>
			
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
		</form>
        </div>
    )
}

export default AddTodoForm
