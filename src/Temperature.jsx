import { useState } from 'react';

function Temperature() {
  const [temperature, setTemperature] = useState(20);

  const increaseTemperature = () => {
    setTemperature(temperature + 1);
  };

  const decreaseTemperature = () => {
    setTemperature(temperature - 1);
  };

  let temperatureColor;

  if (temperature >= 26) {
    temperatureColor = 'red';
  } else if (temperature >= 20) {
    temperatureColor = 'orange';
  } else if (temperature >= 15) {
    temperatureColor = 'yellow';
  } else if (temperature >= 10) {
    temperatureColor = 'green';
  } else {
    temperatureColor = 'teal';
  }

  return (
    <div>
      <h2 style={{ color: temperatureColor }}>{temperature}°C</h2>

      <button onClick={increaseTemperature}>+1°C</button>
      <button onClick={decreaseTemperature}>-1°C</button>
    </div>
  );
}

export default Temperature;
