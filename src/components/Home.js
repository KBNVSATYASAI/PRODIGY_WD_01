import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <video autoPlay muted loop id="background-video">
      <source src="https://cdn.pixabay.com/video/2024/03/30/206272_large.mp4" type="video/mp4" />

         Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Home Content</h1>
        <p>Welcome to the home page.</p>
      </div>
    </div>
  );
};

export default Home;



 