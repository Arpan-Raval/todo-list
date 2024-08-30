import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { TodoItem } from './MyComponents/TodoItem';
import { Footer } from './MyComponents/Footer';
import react,{ useState } from "react";

function App() {

  const onDelete =(todo)=>{
    console.log("i am arpan",todo);
    setTodo(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const [todos , setTodo]= useState([
    {
      number : 1,
      task : "go to market",
      desc : "go to the market and get some vegitables"
    },
    {
      number : 2,
      task : "go to school",
      desc : "go to the market and get some knowledge"
    },
    {
      number : 3,
      task : "go to college",
      desc : "go to the market and get some memory"
    }
  ]); 
  return (
    <>
    <Header title="To-do-List" searchbar={true}/>
    <Todos todos = {todos} onDelete = {onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
