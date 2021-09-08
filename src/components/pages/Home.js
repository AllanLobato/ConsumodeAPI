import React from 'react';
import Head from '../Head';
import './Home.css';

const Home = () => {
  return (
    <div className="animeLeft">
      <Head title="Home" />

      <h1>
        Este é um site feito com REACT com o intuito de consumir a API
        https://jsonplaceholder.typicode.com/
      </h1>
    </div>
  );
};

export default Home;
