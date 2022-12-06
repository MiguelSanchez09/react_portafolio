import React from 'react';
import Header from '../header';
import Footer from '../footer';
import './Home.css';

function Home() {
  return (
    <>
      <Header />
      <div className='container ContainerHome'>
        <div className='photo'>
          <img height='200px' src='/assets/perfil.JPG' alt='Foto' />
        </div>
        <h2>Sobre Mi</h2>
        <p>
          Me llamo Miguel Angel Sanchez tengo 27 años, naci en Colombia, en este momento me encuentro estudiando desarrollo web full stack en LarnU. Me encuentro en busca de una gran oportunidad para reforzar mis habilidades.{' '}
        </p>
        <ul>
          Conocimientos Adquiridos:
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React.Js</li>
          <li>Git</li>
          <li>Github</li>
        </ul>
        <p>Bootcamp LarnU 2022</p>
      </div>
      <Footer />
    </>
  );
}

export default Home;
