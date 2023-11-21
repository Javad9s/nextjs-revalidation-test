function getInt(rnd: number) {
  const min = 100;
  const max = 999;
  return Math.floor(rnd * (max - min + 1)) + min;
}
interface Props {
  rnd: number;
}
export default function NumDisplay({ rnd }: Props) {
  return <>{`${getInt(rnd)} <${rnd}>`}</>;
}
