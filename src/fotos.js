import React from "react";
import { Menu } from "./Menu";
import { Search } from "./Search";
import { Fotosviajes } from "./fotosviajes";

const misViajes = [
  { text: 'Leer la biblia' },
  { text: 'Estudiar Macro' },
  { text: 'Ir al trabajo' },
  { text: 'Leer bitcoin standar' },
];

function Fotos() {
  return (
    <div>
      <Menu />
      <Search />
      {/* Utiliza la función map correctamente */}
      <Fotosviajes
        data={misViajes.map(todo => ({
          key: todo.text,
          text: todo.text,
          completed: todo.completed,
        }))}
      />
      <p>Ultimas fotos</p>
    </div>
  );
}

export { Fotos };
