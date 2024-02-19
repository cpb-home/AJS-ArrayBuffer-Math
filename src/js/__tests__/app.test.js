import Daemon from '../characters/Daemon';

test.each([
  [1, 100],
  [2, 90],
  [3, 80],
  [4, 70],
  [5, 60]
])(
  ('Attack on distance %i without dope must be %i'),
  (distance, attack) => {
    const dem = new Daemon(1);
    dem.distance = distance;
    expect(dem.attack).toBe(attack);
  }
)

test.each([
  [1, 100],
  [2, 85],
  [3, 72.08],
  [4, 60],
  [5, 48.39]
])(
  ('Attack on distance %i with dope must be %i'),
  (distance, attack) => {
    const dem = new Daemon(1);
    dem.stoned = true;
    dem.distance = distance;
    expect(dem.attack).toBe(attack);
  }
)



