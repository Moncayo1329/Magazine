import React from "react";

function Search( {
  searchValue,
  setSearchValue,
  }) {


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
  
