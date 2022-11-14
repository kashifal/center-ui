import React from 'react';
import Code from './components/Code/code';

const App = () => {
  const codeString = `
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
  `;
  const p = `<p>Hello P</p>`;
  return (
    <div>
      <Code code={codeString} language="html" />
      <Code code={p} language="html" />

  
    </div>
  )
}

export default App