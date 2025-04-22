import { CardType } from "./card";

export type WarningModalprops = {
  onClose: () => void;
  name: string;
};
export type EmptyViewProps = {
  data: CardType[];
};
