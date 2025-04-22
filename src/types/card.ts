import { ReactNode } from "react";

export type CardTab = "all" | "active" | "inactive";
export type CardType = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};
export interface CardContextType {
  cardTab: CardTab;
  setCardTab: (status: CardTab) => void;
  cards: CardType[];
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
  onToggle: (name: string) => void;
}

export interface CardProviderProps {
  children: ReactNode;
}

export type CardProps = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};

type TabButton = {
  id: CardTab;
  text: string;
};

export const tabButtons: TabButton[] = [
  { id: "all", text: "All" },
  { id: "active", text: "Active" },
  { id: "inactive", text: "Inactive" },
];

export type ToggleCardButtonProps = {
  name: string;
  isActive: boolean;
};
