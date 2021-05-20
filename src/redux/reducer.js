import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {id:1,template:'Hello How are U ?',complete:false},
    {id:2,template:'Hey Zeeshan noor',complete:false},
    {id:3,template:'Where are u going',complete:false},
]

const todoSlice = createSlice({
name:'todo',
initialState,
reducers:{
    addTodo:(state,action)=>{
        const newTodo = {
            id:Date.now(),
            template:action.payload.template,
            complete:false
        }
        state.push(newTodo)
    },
    toogleComplete:(state,action)=>{
        const index = state.findIndex(
            (todo)=>todo.id ===action.payload.id
        );
        state[index].complete = action.payload.complete;
    },
    deleteTodo:(state,action)=>{
        return state.filter((todo)=>todo.id !==action.payload.id)
    }
}
})

export const {addTodo,toogleComplete,deleteTodo} = todoSlice.actions; 


export default todoSlice.reducer;
