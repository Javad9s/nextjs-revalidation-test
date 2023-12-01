import { GetRandomNumber } from "@/utils/getNumber";

export default function RandomNumber() {
  return <div>{`Page Specific ${GetRandomNumber()}`}</div>;
}
