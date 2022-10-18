import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK, UPDATE_TASK } from "../type/ToDoListTypes";
import { CHANGE_THEME } from '../../redux/type/ToDoListTypes'


// dispatch the nay de de quan ly
export const addtask =(newTask)=>({
    type:ADD_TASK,
    newTask
})


// changeTheme
export const changeThemeAction = themeId => ({
    type:CHANGE_THEME,
    themeId
})

//done task
export const doneTask = (taskId) => ({
    type:DONE_TASK,
    taskId
})

//delete task
export const deleteTask = (taskId) => ({
    type:DELETE_TASK,
    taskId
})


/**
 * Khi cập nhật lại state ta đụng đến thằng lifeCycleUpdate nó sẽ 
 * lấy dữ liệu từ state trên redux để binding ra dữ liệu chứ không phải lấy dữ liệu từ người dùng nhập vào
 * khắc phục: trước khi hàm render được gọi ta sẽ can thiệp để lấy giá trị từ redux để gáng vào giá trị this.state của component
 * và value của của input phải binding từ state
 */
export const editTask = (task) => ({
    type:EDIT_TASK,
    task
})


export const updateState = (taskName) => ({
    type:UPDATE_TASK,
    taskName
})

