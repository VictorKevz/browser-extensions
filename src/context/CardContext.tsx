/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import {
  CardContextType,
  CardProviderProps,
  CardTab,
  CardType,
} from "../types/card";

export const CardContext = createContext<CardContextType | undefined>(
  undefined
);

export const CardProvider = ({ children }: CardProviderProps) => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [cardTab, setCardTab] = useState<CardTab>("all");

  const updateCardTab = (status: CardTab) => {
    setCardTab(status);
  };
  return (
    <CardContext.Provider
      value={{ cardTab, setCardTab: updateCardTab, cards, setCards }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context)
    throw new Error("useCardContext must be used within a CardProvider");
  return context;
};
