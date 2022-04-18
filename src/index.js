import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ButtonReact from './components/Button';
import VideoReact from './components/Video';
import ListReact from './components/List';
import SonidoReact from './components/Sonido';
import Blog from './components/Blog';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'},
  {id: 3, title: 'Good Bye...', content: 'You can uninstall Win10.'}
];

root.render(
  <React.StrictMode>
    <ButtonReact >  
      Esto es un botton
      <h1>Hola desde H1</h1>
    </ButtonReact>
    <VideoReact> Boton de Play/Pausa de video </VideoReact>
    <Blog posts={posts} />
  </React.StrictMode>
);


//
//<VideoReact> Boton de Play/Pausa de video </VideoReact>
// <SonidoReact> Boton de Sonido</SonidoReact>
// <ListReact> Esto es una lista</ListReact>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
