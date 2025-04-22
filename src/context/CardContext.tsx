/* eslint-disable react-refresh/only-export-components */
import data from "../data.json";
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
  const [cards, setCards] = useState<CardType[]>(data);
  const [cardTab, setCardTab] = useState<CardTab>("all");

  const updateCardTab = (status: CardTab) => {
    setCardTab(status);
  };

  const toggleCardStatus = (name: string) => {
    setCards((prev) =>
      prev.map((card) =>
        card.name === name ? { ...card, isActive: !card.isActive } : card
      )
    );
  };

  return (
    <CardContext.Provider
      value={{
        cardTab,
        setCardTab: updateCardTab,
        cards,
        setCards,
        onToggle: toggleCardStatus,
      }}
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
