import React from 'react';
import Health from './HealthComponent';
import './Combat.css'

const Combat = ({ hitPoints, maxHitPoints, tempHitPoints, takeDamage, heal, setTempHP }) => (
    <div>
        <Health />
        <p>{`Temp HP: ${tempHitPoints}`}</p>
        <p>{`Health: ${hitPoints}/${maxHitPoints}`}</p>
        <button onClick={() => takeDamage(5)}>Take Damage: 5</button>
        <button onClick={() => heal(7)}>Heal: 7</button>
        <button onClick={() => setTempHP(6)}>Set Temp: 6</button>
    </div>
);

export default Combat;
