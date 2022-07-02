export const randomInt = (min: number, max: number): number => {
  const range = max - min;

  if (range < 0) return 0;
  if (range === 0) return max;

  const seed = Math.random();
  
  const result = Math.round(seed * range) + min;
  return result;
}