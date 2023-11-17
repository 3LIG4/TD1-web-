import React, { useState } from 'react';
import Pictogramme from './composants/Pictogramme';
import Commentaire from './composants/Commentaire';
import './App.css';

function App() {
  const [message, setMessage] = useState("Bonne découverte des composants React 'Components!!!'");

  const handleLikeClick = () => {
    setMessage("Premier défi réussi");
  };

  return (
    <div className="col-6 offset-3">
      <div className="card">
        <div className="card-block">
          <div className="row">
            <div className="col-2">
              <img
                alt=""
                src="https://thomas-bart.com/wp-content/uploads/2017/03/developper-1680x1201.jpg"
                className="rounded float-left"
                width="80"
                height="70"
              />
            </div>
            <div className="col-10 profile-row">
              <div className="row">
                <a href="#">
                  <h1> Débuter avec React </h1>
                </a>
              </div>
            </div>
          </div>
          <p>{message}</p>

          <div>
            <Pictogramme onLikeClick={handleLikeClick} />
          </div>
        </div>

        <div className="card-footer text-muted">
          <Commentaire />
        </div>
      </div>
    </div>
  );
}

export default App;
