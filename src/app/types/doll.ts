export interface Doll {
  nameEn: string;
  path: string;
  baseRarity: number;
}

export interface DollProps {
  readonly doll: Doll;
}
