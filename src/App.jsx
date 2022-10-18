import logo from './logo.svg';
import './App.css';
import DemoJSS from './JSS_Styled_Component/DemoStyleJSS/DemoJSS';
import { DemoTheme } from './JSS_Styled_Component/Theme/DemoTheme';
import ToDoList from './JSS_Styled_Component/ToDoListComponent/ToDoList';

function App() {
  return (
    <div className="App">
       {/* <DemoJSS/>  */}
       {/* <DemoTheme/> */}
       <ToDoList/>
       {/* <LifeCycle/> */}
    </div>
  );
}

export default App;
