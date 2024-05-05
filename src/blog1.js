import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";
import NunkaContent from "../Markdown/Nunka.md";
import { Menu } from "./Menu";

function Rutas() {
  return (
    <div>
      <Menu />
      <Markdown>{NunkaContent}</Markdown>
      <Footer />
    </div>
  )
};

export { Rutas };
