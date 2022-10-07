import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Relogio() {
  const [state, setState] = useState(new Date().toLocaleTimeString());

  // quando o component renderiza 
  useEffect(() => {
    // atualizar o state a cada segundo
    let intervalID = setInterval(() => {
      setState(new Date().toLocaleTimeString());
    }, 1000)

    // quando o component sair da tela
    return () => {
      // para a atualizacao do state 
      clearInterval(intervalID)
    }
  });

  return (
    <div>
      <h2>It is {state}.</h2>

      <button onClick={() => setState(new Date().toLocaleTimeString())}>
        Atualizar
      </button>
    </div>
  );
}

function App() {
  const [show, setShow] = useState(true)
  return (
    <>
      <h1>Hello, world!</h1>
      {show && <Relogio />}
      {show && <button onClick={() => setShow(false)}>remover primeiro relogio </button>}
      <Relogio />
      <Relogio />
    </>
  );
}

root.render(<App />);

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// function Hearder()
// {
//   return <div style={'width : 1440; height: 192; backGroundColor: #blue'}>
//   </div>
// }
// function Relogio(props){
//   const date = props.date;
//   return <div>
//   <h1>Relogio</h1>
//   <h2>Hora{date}.</h2>
// </div>
// }
// setInterval(()=>{
//   console.log('olha so o que vem a seguir');
//   <Relogio date={new Date().toLocaleTimeString()}/>
// },1000);
// setInterval(()=>{
//   root.render(
//       <Relogio date={new Date().toLocaleTimeString()}/>
//     );
// },1000);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// reportWebVitals();

