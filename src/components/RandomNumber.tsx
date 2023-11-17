import CustomNumber from "./CustomNumber";

export default function RandomNumber() {
  const randomNumber = Math.random();
  return <CustomNumber rnd={randomNumber} />;
}
