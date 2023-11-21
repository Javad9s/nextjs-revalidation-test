import NumDisplay from "./NumDisplay";

export default function RandomNumber() {
  const randomNumber = Math.random();
  return <NumDisplay rnd={randomNumber} />;
}
