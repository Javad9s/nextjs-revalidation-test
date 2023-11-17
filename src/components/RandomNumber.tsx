function getInt(rnd : number) {
  const min = 100;
  const max = 999;
  return Math.floor(rnd * (max - min + 1)) + min;
}
const RandomNumber = () => {
  const randomNumber = Math.random();
  return <>{`${getInt(randomNumber)} - ${randomNumber}`}</>;
};

export default RandomNumber;
