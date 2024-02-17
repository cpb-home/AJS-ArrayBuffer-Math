import Daemon from './characters/Daemon';

//Math.propName = propValue;
//Math.methodName = methodRef;

const dem = new Daemon(1);

for (let distance = 1; distance < 6; distance++) {
  setAttack(distance, dem);
  console.log(`Сила атаки без дурмана на ${distance} клет. = ${dem.attack}`);
  dem.attack = 100;
}
console.log('---------------------------');
dem.stoned = true;

for (let distance = 1; distance < 6; distance++) {
  setAttack(distance, dem);
  console.log(`Сила атаки c дурманом на ${distance} клет. = ${dem.attack}`);
  dem.attack = 100;
}

export default function setAttack(distance, char) {
  char.attack -= ((distance * 10 - 10) + (char.stoned ? Math.log2(distance) * 5 : 0)).toFixed(2);
}