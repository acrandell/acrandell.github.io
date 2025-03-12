import React, { useState } from 'react';
import './Style.css'; // Assuming you have the styles in this file

function App() {
  const [showTrickDetails, setShowTrickDetails] = useState(null);

  const tricks = [
    {
      title: "Backwards Long Jump (BLJ)",
      description: "The BLJ is a critical speedrun technique where Mario's speed increases exponentially when performing a long jump backward on certain slopes. This allows Mario to pass through walls or skip parts of the game."
    },
    {
      title: "Cannonless",
      description: "Cannonless allows players to skip the cannon sequence in Bowser in the Sky by performing a precise wall kick to reach the star."
    },
    {
      title: "Long Jump",
      description: "A basic but important technique. By performing a long jump, Mario travels faster across the ground or slopes, saving time."
    },
    {
      title: "Wall Kicks",
      description: "Wall kicks allow Mario to perform higher jumps and avoid falling in certain areas, skipping obstacles and saving time."
    },
    {
      title: "Fast Camera Movement",
      description: "Speedrunners often adjust the camera to reduce friction and make Mario move faster. Learning when to adjust the camera during key moments is important for efficiency."
    },
    {
      title: "Jump Diving",
      description: "Jump diving is used to maintain Mario's momentum after a long jump, increasing his speed and making travel across water or inclines more efficient."
    }
  ];

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="Index.html">Speedrunning Hub</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="leaderboards.html">Leaderboards</a></li>
            <li className="nav-item"><a className="nav-link" href="other.html">Other Grade Stuff</a></li>
            <li className="nav-item"><a className="nav-link" href="ReactIndex.html">React</a></li>
          </ul>
        </div>
      </nav>

      <header className="bg-light text-center py-5">
        <h1 className="display-4">Speedrunning Training</h1>
        <p>Learn advanced techniques and optimize your runs.</p>
      </header>

      <main className="container my-5">
        <h2>Training Resources</h2>
        <ul>
          <li><a href="D3Chart.html">D3 Training chart</a></li>
          <li><a href="#">Optimizing Movement</a></li>
          <li><a href="#">Platform-Specific Tricks</a></li>
        </ul>

        <h2 className="mt-5">Common Super Mario 64 Speedrun Tricks</h2>
        <p>Here are some essential tricks and techniques that speedrunners use in *Super Mario 64* to save time and optimize their runs.</p>
        
        <div className="list-group">
          {tricks.map((trick, index) => (
            <div
              key={index}
              className="list-group-item list-group-item-action"
              onClick={() => setShowTrickDetails(showTrickDetails === index ? null : index)}
            >
              <h5>{trick.title}</h5>
              {showTrickDetails === index && (
                <p>{trick.description}</p>
              )}
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-dark text-center text-white py-3">
        <p>&copy; 2024 Speedrunning Hub | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;

