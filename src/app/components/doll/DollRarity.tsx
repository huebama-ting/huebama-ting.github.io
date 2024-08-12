import { IoStar, IoStarHalf } from "react-icons/io5";

interface DollRarityProps {
  readonly rarity: number;
}

export function DollRarity(props: DollRarityProps) {
  const isHalfStar = !Number.isInteger(props.rarity);
  const revisedRarity = isHalfStar ? Math.trunc(props.rarity) : props.rarity;

  return (
    <div>
      {[...new Array(revisedRarity).keys()].map((count) => (
        <IoStar key={count} />
      ))}
      {isHalfStar && <IoStarHalf />}
    </div>
  );
}

export default DollRarity;
