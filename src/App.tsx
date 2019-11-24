import React from "react";
// import logo from "./logo.svg";
import logo from "./images/logodirectorprod.jpg";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="sisca">
        <p>SISCA</p>
        <iframe
          className="sisca-video-container"
          title="Sisca"
          src="https://player.vimeo.com/video/223330738?autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0"
          // width="1920"
          // height="1080"
          frameBorder="0"

          // webkitallowfullscreen="true"
          // mozAllowFullScreen=""
          // allowfullscreen=""
        />
      </div>
      <div className="our-oceans-tangled">
        <p>OUR OCEANS - TANGLED - MUSIC VIDEO - DIRECTOR, PRODUCER</p>
        <iframe
          title="Our Oceans - tangled"
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/iFmujUPYZcQ"
          frameBorder="0"
          // allowfullscreen=""
        ></iframe>
      </div>
      <div className="true-colors">
        <p>TRUE COLORS - SHORT DOCUMENTARY - DIRECTOR, PRODUCER</p>
        <iframe
          title="True Colors"
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/u0yXfzCtgN4"
          frameBorder="0"
          // allowfullscreen=""
        ></iframe>
      </div>
      <div className="contact">
        <div className="contact-header">Contact</div>
        <div className="contact-details-phone">Phone: +31(0)6-28542744</div>
        <div className="contact-details-email">
          E-mail: jobkuizenga@outlook.com
        </div>
      </div>
    </div>
  );
};

export default App;
