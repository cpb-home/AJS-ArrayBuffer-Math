import Daemon from './characters/Daemon';

const dem = new Daemon(1);
dem.count();

for (let distance = 1; distance < 6; distance++) {
  dem.distance = distance;
  console.log(`Сила атаки без дурмана на ${distance} клет. = ${dem.attack}`);
  dem.attack = 100;
}
console.log('---------------------------');
dem.stoned = true;

for (let distance = 1; distance < 6; distance++) {
  dem.distance = distance;
  console.log(`Сила атаки c дурманом на ${distance} клет. = ${dem.attack}`);
  dem.attack = 100;
}