import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    items: [],
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return { items: [...state.items, action.payload] };
        },
        removeTodo: (state, action) => {
            console.log(action);
            let array = [...state.items];
            let index = action.payload;
            if (index !== -1) {
                array.splice(index, 1);
                return { items: array };
            }
        },
        cleartodo: () => {
            return { todo: [] };
        },
    },
});

export const { addTodo, removeTodo, clearTodo } = todoSlice.actions;

export default todoSlice.reducer;
