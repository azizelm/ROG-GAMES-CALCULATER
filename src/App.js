import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [characterAttack, setCharacterAttack] = useState(100);
  const [characterDefense, setCharacterDefense] = useState(50);
  const [characterLevel, setCharacterLevel] = useState(10);
  const [enemyHealth, setEnemyHealth] = useState(1000);
  const [enemyDefense, setEnemyDefense] = useState(30);
  const [enemyLevel, setEnemyLevel] = useState(10);
  const [calculatedDamage, setCalculatedDamage] = useState(0);
  const [message, setMessage] = useState('');

  const calculateDamage = () => {
    const baseDamage = (characterAttack - enemyDefense) * characterLevel;
    const randomFactor = Math.random() * 0.2 + 0.9; 
    const totalDamage = Math.max(0, baseDamage * randomFactor);
    setCalculatedDamage(Math.round(totalDamage));

    const updatedHealth = enemyHealth - totalDamage;
    setEnemyHealth(updatedHealth > 0 ? updatedHealth : 0);

    setMessage(updatedHealth <= 0 ? 'Enemy defeated!' : `Enemy health: ${updatedHealth.toFixed(2)}`);
  };

  return (
    <div className="App">
      {/* Video background */}
      <div className="video-background">
        <video autoPlay muted loop>
          <source src="/metalslug.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Main content */}
      <div className="content">
        <h1>RPG Damage Calculator</h1>
        <div>
          <h3>Character Stats</h3>
          <label>Attack: </label>
          <input
            type="number"
            value={characterAttack}
            onChange={(e) => setCharacterAttack(Number(e.target.value))}
          />
          <label>Defense: </label>
          <input
            type="number"
            value={characterDefense}
            onChange={(e) => setCharacterDefense(Number(e.target.value))}
          />
          <label>Level: </label>
          <input
            type="number"
            value={characterLevel}
            onChange={(e) => setCharacterLevel(Number(e.target.value))}
          />
        </div>

        <div>
          <h3>Enemy Stats</h3>
          <label>Health: </label>
          <input
            type="number"
            value={enemyHealth}
            onChange={(e) => setEnemyHealth(Number(e.target.value))}
          />
          <label>Defense: </label>
          <input
            type="number"
            value={enemyDefense}
            onChange={(e) => setEnemyDefense(Number(e.target.value))}
          />
          <label>Level: </label>
          <input
            type="number"
            value={enemyLevel}
            onChange={(e) => setEnemyLevel(Number(e.target.value))}
          />
        </div>

        <button onClick={calculateDamage}>Calculate Damage</button>

        <div>
          <h3>Calculated Damage: {calculatedDamage}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
