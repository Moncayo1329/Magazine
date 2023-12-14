import React from "react";

function Search() {
const [searchValue, setSearchValue] = React.
useState('');
console.log('Usuarios made the day ' + searchValue)


    return(

    <form>
    <input
     placeholder="Busca tu viaje"
          className='TodoSearch'
          value={searchValue}
         onChange={(event) => {
            setSearchValue(event.target.value);
           

          } 
        }
    />
     </form>
    );
    }
   


export {Search}
  
