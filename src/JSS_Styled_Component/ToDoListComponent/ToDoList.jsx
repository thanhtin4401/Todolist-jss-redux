import React, { Component } from 'react'
import {connect} from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { addtask,changeThemeAction, deleteTask, doneTask, editTask, updateState } from '../../redux/action/ToDoListAction'
import { CHANGE_THEME } from '../../redux/type/ToDoListTypes'
import { Button } from '../container/Button'
import { Container } from '../container/Container'
import { Dropdown } from '../container/Dropdown'
import { Heading1, Heading2, Heading3, Heading4 } from '../container/Heading'
import { Table, Th, Thead, Tr } from '../container/Table'
import { Label, Input, TextField } from '../container/TextField'
import { arrTheme } from '../Theme/ThemeManager'
import { ToDoListDarkTheme } from '../Theme/ToDoListDarkTheme'
import { ToDoListLightTheme } from '../Theme/ToDoListLightTheme'
import { ToDoListPrimaryTheme } from '../Theme/ToDoListPrimaryTheme'




 class ToDoList extends Component {
    
    state ={
        taskName:'',
        disabled:true,
        disabledAddTask:false
    }


    renderTabToDo = () => {
        return this.props.taskList.filter(task=>!task.done).map((task,index) => {
            return(
                <Tr key={index}>
                <Th>{task.taskName}</Th>
                <Th className="text-right">
                    <Button onClick={() => {
                        // do thằng setState và dispatch nó bất đồng bộ nên phải cho 2 thằng chạy ở dạng tham số thứ 2 để 2 thằng chạy theo thứ tự
                        this.setState({
                            disabled: false,
                            disabledAddTask:true
                        },() => {
                            this.props.dispatch(editTask(task))    
                        })
                        
                    }}><i className="fa-solid fa-pen-to-square"></i></Button>
                    <Button onClick={() => {
                        this.props.dispatch(deleteTask(task.id))
                    }}><i className="fa-solid fa-trash"></i></Button>
                    <Button onClick={() => {
                        this.props.dispatch(doneTask(task.id))
                    }}><i className="fa-regular fa-circle-check"></i></Button>
                </Th>
            </Tr>
            )
        })        
    }
    renderTabComplete = () => {
        return this.props.taskList.filter(task=>task.done).map((task,index) => {
            return(
                <Tr key={index}>
                <Th>{task.taskName}</Th>
                <Th className="text-right">
                    <Button onClick={() => {
                        this.props.dispatch(deleteTask(task.id))
                    }}><i className="fa-solid fa-trash"></i></Button>
                </Th>
            </Tr>

            )
        })        
    }

    // handleChange = (e) => {
    //     let {name,value} = e.target.value;
    //     this.setState({
    //         [name]:value
    //     })
    // }


    renderTheme = () => {
        return arrTheme.map((theme,index) => {
            return(
                <option key={index} value={theme.id}>{theme.name}</option>
            )
        })
    }

    // hàm này sẽ chạy trước cả hàm render
    // componentWillReceiveProps(newProps){
    //     // khi click chọn task edit thì thằng props sẽ vẫn là task 1
    //     console.log('props',this.props);
    //     // hàm chạy trước khi render ra giao diện nên nó đã là thằng task 2 
    //     console.log('component',newProps);
    //     this.setState({
    //         taskName:newProps.taskEdit.taskName
    //     })
    // }


    // hàm componentDisUpdate chạy sau render nhưng nó vẫn trả về props cũ và state cũ của component 
    componentDidUpdate(prevProps,prevState){
        if(prevProps.taskEdit.id !== this.props.taskEdit.id){
            this.setState({
                taskName:this.props.taskEdit.taskName
            })
        }

    }
    
    render() {
        return (
            <ThemeProvider theme={this.props.themeToDoList}>
                <Container className="w-50">
               <Dropdown onChange={(e) => {
                   let {value} = e.target;
                   this.props.dispatch(changeThemeAction(value)
                   )
               }}>
                   {this.renderTheme()}
               </Dropdown>
               <Heading1 className="">To Do List</Heading1>
               <div className="text-left">
               <TextField value={this.state.taskName} onChange={(e) => {
                   this.setState({
                       taskName: e.target.value
                   })
               }} name="taskName" label="Task name"className="w-50"/>
               {
                   this.state.disabledAddTask 
                   ?
                   <Button disabled onClick={() => {
                    let{taskName} = this.state;
                    let newTask = {
                        
                        id:Date.now(),
                        taskName:taskName,
                        done:false
                    }

                    // đưa newTab lên trên redux thông qua phương thức dispatch
                    this.props.dispatch(addtask(newTask));
                    
                }} className="ml-2"><i className="fa-solid fa-plus"></i> Add task</Button> 
                    :
                <Button onClick={() => {
                    let{taskName} = this.state;
                    let newTask = {
                        
                        id:Date.now(),
                        taskName:taskName,
                        done:false
                    }

                    // đưa newTab lên trên redux thông qua phương thức dispatch
                    this.props.dispatch(addtask(newTask));
                    
                }} className="ml-2"><i className="fa-solid fa-plus"></i> Add task</Button>
               }
               
                {
                    this.state.disabled ?  <Button disabled onClick={() => {
                       
                            this.props.dispatch(updateState(this.state.taskName))
                    
                       
                       
                       
                    }} className="ml-2 ">Update task</Button> 
                    :<Button onClick={() => {

                        let {taskName} = this.state;
                        this.setState({
                            taskName:'',
                            disabledAddTask:false,
                            disabled:true
                        },() => {
                            
                            this.props.dispatch(updateState(taskName))
                        })
                       
                    }} className="ml-2 ">Update task</Button>
                }
               
                <hr />
                <Heading3 className="my-2">Task to Do</Heading3>
                <Table>
                    <Thead>
                       {this.renderTabToDo()}
                      
                    </Thead>
                </Table>
                <Heading3 className="my-2">Task complate</Heading3>
                <Table>
                    <Thead>
                        {this.renderTabComplete()}    
                    
                    </Thead>
                </Table>
               </div>
               
                
                </Container>
                
            </ThemeProvider>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeToDoList:state.ToDoListReducer.themeToDolist,
        taskList:state.ToDoListReducer.taskList,
        taskEdit:state.ToDoListReducer.taskEdit
    }
}

// const mapDepacth

export default connect (mapStateToProps)(ToDoList);
