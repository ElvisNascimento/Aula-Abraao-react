import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Relogio(props){
  const date = props.date;
  return <div>
  <h1>Relogio</h1>;
  <h2>Hora{date}.</h2>
</div>
}

// setInterval(()=>{
//   console.log('olha so o que vem a seguir');
//   <Relogio date={new Date().toLocaleTimeString()}/>
// },1000);
setInterval(()=>{
  root.render(
    <Relogio date={new Date().toLocaleTimeString()}/>
);
},1000);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();
