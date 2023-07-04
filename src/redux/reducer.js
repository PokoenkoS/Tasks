import { statusFilters } from "./constants";

const tasksInitialState =[];

export const taskReducer = (state=tasksInitialState, action)=>{
switch(action.type) {
    case "tasks/addTask":
        return [...state, action.payload];
    case "tasks/deleteTask":
        return state.filter(task=> task.id !== action.payload);
    case "tasks/toggleCompleted":
        return state.map(task=>{
         if(task.id !== action.payload){
            return task;
                }
       return {...task, completed: !task.completed}
            });
    default:
     return state;   
}
};

const filterInitialState = {
    status: statusFilters.all,
}

export const filterReducer = (state=filterInitialState, action) =>{
  switch(action.type) {
    case "filter/setStatusFilter":
        return {
            ...state,
            status: action.payload,
        }
    default:
        return state;    
  }
}