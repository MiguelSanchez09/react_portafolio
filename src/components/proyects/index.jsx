import React from 'react';
import Header from '../header';
import Footer from '../footer';
import MediaCard from './Card';
import './Proyects.css';

function Proyects() {
  return (
    <>
      <Header />
      <div className="container">
        <h2>PROYECTOS</h2>
        <div className="container__proyects">
          <MediaCard
            imageUrl="/assets/turismo2.jpg"
            imageAlt="Previsualización de página"
            title="Tour Colombia VIP"
            viewUrl="https://miguelsanchez09.github.io/turismo-colombia-vip/"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Proyects;
