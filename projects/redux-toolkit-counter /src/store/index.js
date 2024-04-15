import {configureStore, createSlice} from "@reduxjs/toolkit"

// const INITIAL_VALUE = {
//     counter: 0
// }

// const counterReducer = (store = INITIAL_VALUE, action) => {
//     if(action.type === "INCREMENT"){
//         return {counter: store.counter + 1}
//     }
//     else if(action.type === "DECREMENT"){
//         return {counter: store.counter - 1}
//     }
//     return store
// }

const counterSlice = createSlice({
    name:'counter',
    initialState:{counterVal: 0},
    reducers:{
        increment: (state) => {
         state.counterVal ++
        },
        decrement:(state) => {
            state.counterVal --
        }
    }
})

const counterStore = configureStore({
    reducer:{
        counter:counterSlice.reducer
    }
})

export const counterActions = counterSlice.actions
export default counterStore