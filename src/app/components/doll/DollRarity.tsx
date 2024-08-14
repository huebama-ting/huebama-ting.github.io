import { IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";

interface DollRarityProps {
  readonly rarity: number;
}

export function DollRarity(props: DollRarityProps) {
  const isHalfStar = !Number.isInteger(props.rarity);
  const revisedRarity = isHalfStar ? Math.trunc(props.rarity) : props.rarity;

  return (
    <div>
      {[...new Array(revisedRarity).keys()].map((count) => (
        <IconStarFilled key={count} />
      ))}
      {isHalfStar && <IconStarHalfFilled />}
    </div>
  );
}

export default DollRarity;
