import React from "react";
import { Menu } from "./Menu";
import { Search } from "./Search";
import { Fotosviajes } from "./fotosviajes";

const misViajesTodos = [
  { text: 'Machu', completed:true},
  { text: 'Paris', completed:false},
  { text: 'Lima', completed:true},
  { text: 'Paris', completed:false},
  { text: 'Ir al gym', completed:true},
  
  ];

function Fotos() {
  const [todos, setTodos] = React.useState(misViajesTodos);
  const [searchValue, setSearchValue] = React.
useState('');

const completedTodos = todos.filter(todo => !!todo.completed).length;
const totalTodos = todos.length;

const searchedTodos = todos.filter(
  (todo) => {
  
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLowerCase();
   return  todoText.includes
   (searchText);
  }
  
  );

  console.log('Usuarios made the day ' + searchValue)





  return (
    <>
      <Menu />
      <Search 
      searchValue={searchValue}
      setSearchValue={setSearchValue}/>
  
      <Fotosviajes>
        {searchedTodos.map(todo => ( 
          <TodoDay 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}/>
          
          ))}
      
      </Fotosviajes>

      <p>Ultimas fotos</p>
    </>
  );
}

export { Fotos };
