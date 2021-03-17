import React from 'react';
import { render } from 'react-dom';

function App() {
  return (
    <div>Hello</div>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
