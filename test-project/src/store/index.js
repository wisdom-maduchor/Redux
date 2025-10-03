// import {createStore} from 'redux'
import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialState = {counter: 0, showCounter: true};


// COUNTER REDUCER USING REDUX TOOLKIT
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state){
            state.counter++;
        },
        decremenet(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
})

// COUNTER REDUCER WITHOUT USING REDUX TOOLKIT
// const counterReducer = (state = initialState, action) => {
//    if(action.type === 'increment') {
//     return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter
//     }
//    };

//    if(action.type === 'increase') {
//     return {
//         counter: state.counter + action.amount,
//         showCounter: state.showCounter
//     }
//    };

//    if(action.type === 'decrement') {
//     return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter
//     }
//    }

//    if(action.type === 'toggle') {
//     return{
//         counter: state.counter,
//         showCounter: !state.showCounter
//     }
//    }

//    return state;
// }
// const store = createStore(counterReducer);

// configureStore is similare to createStore just that i enables combining of multible reducers while createStore allows just one reducer
const store = configureStore({
    reducer: counterSlice.reducer
})

export const counterActions = counterSlice.actions;
export default store;