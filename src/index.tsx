import React from "react";
import { createRoot } from 'react-dom/client';
function component() {
  const x = "heldlo jdfdadfdsafasfdasfdafx man hello"
  return <div>{x}</div>
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(component());