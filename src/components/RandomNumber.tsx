import { GetRandomNumber } from "@/utils/getNumber";

export default function RandomNumber() {
  return <div>{`Not cached: ${GetRandomNumber()}`}</div>;
}
