import { arrTheme } from "../../JSS_Styled_Component/Theme/ThemeManager";
import { ToDoListDarkTheme } from "../../JSS_Styled_Component/Theme/ToDoListDarkTheme";
import { ADD_TASK, CHANGE_THEME, DELETE_TASK, DONE_TASK, EDIT_TASK, UPDATE_TASK } from "../type/ToDoListTypes";

const inittialState = {
  themeToDolist: ToDoListDarkTheme,
  taskList: [
    { id: 1, taskName: "task1", done: true },
    { id: 2, taskName: "task2", done: false },
    { id: 3, taskName: "task3", done: false },
    { id: 4, taskName: "task4", done: true },
  ],
  taskEdit:{ id: 1, taskName: "task1", done: true },

};


export default (state = inittialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      if (action.newTask.taskName.trim() === "") {
        return { ...state };
      }
      let index = state.taskList.findIndex(task=>
          task.taskName === action.newTask.taskName
      )
      if(index !==-1){
          alert("Đã tồn tại");
          return {...state};
      }
    
      
      let taskListUpdate = [...state.taskList, action.newTask];
      state.taskList = taskListUpdate;
      return { ...state };
    }
    case CHANGE_THEME:{
        let theme = arrTheme.find(theme=>theme.id == action.themeId);
        
        // nhân vào object 
        if (theme) {
            state.themeToDolist = {...theme.theme}
            return {...state};
        }
    }
    case DONE_TASK:{
        let taskUpdate = [...state.taskList];
        let index = taskUpdate.findIndex(task=>task.id === action.taskId);
        if(index !==-1){
          taskUpdate[index].done = true;
        }
        state.taskList = taskUpdate;
        return {...state}
    }
    case DELETE_TASK:{
        let taskDele = [...state.taskList];
        let index = taskDele.findIndex(task=>task.id === action.taskId);
        if (index !==-1) {
          taskDele.splice(index,1);
        }
        state.taskList = taskDele
        return {...state}
    }
    case EDIT_TASK:{
      let taskEdit = action.task;
      state.taskEdit = taskEdit;
      return {...state}
    }
    case UPDATE_TASK:{
      state.taskEdit = {...state.taskEdit,taskName:action.taskName}
      let updateTask = [...state.taskList];
      let index = updateTask.findIndex(taskList => taskList.id === state.taskEdit.id)
      if (index !== -1) {
        updateTask[index]=state.taskEdit;
        
      }
      state.taskList = updateTask;
      return {...state}
      
    }
    default:
      return { ...state };
  }
};
