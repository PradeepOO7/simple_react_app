import './App.css';
//import React,{Component} from 'react';
//import ReactTable from "react-table";
import {Department} from "./Department";
import Pie  from './PieChart';
function App() {
    
  return (
    <div className="App">
    <h1> Dashboard</h1>
       <Department  />  
       <h2>Tab 2</h2>
       <h3>Department Wise Sales</h3>
       <div className="Pie">
       <Pie />
       </div>
    </div>
  )
}
export default App;
