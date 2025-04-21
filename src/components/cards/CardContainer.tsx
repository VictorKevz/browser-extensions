import data from "../../data.json";
import Card from "./Card";
import { useCardContext } from "../../context/CardContext";
import { tabButtons } from "../../types/card";
import { useEffect } from "react";
const CardContainer = () => {
  const { cardTab, setCardTab, cards, setCards } = useCardContext();

  useEffect(() => {
    if (cardTab === "all") {
      setCards(data);
    } else if (cardTab === "active") {
      setCards(data.filter((item) => item.isActive));
    } else {
      setCards(data.filter((item) => !item.isActive));
    }
  }, [cardTab, setCards]);
  return (
    <section className="w-full mt-16">
      <header className="w-full flex flex-col items-center md:flex-row md:justify-between gap-4">
        <h1 className="text-4xl text-[var(--neutral-900)]">Extension List</h1>
        <ul className="flex items-center gap-3">
          {tabButtons.map((item) => {
            const isActive = cardTab === item.id;
            return (
              <li key={item.id}>
                <button
                  className={`h-11 font-normal rounded-full px-5 ${
                    isActive
                      ? "bg-[var(--red-400)] text-[var(--neutral-0)]"
                      : "bg-[var(--neutral-0)] border border-[var(--neutral-200)] text-[var(--neutral-900)]"
                  }`}
                  type="button"
                  onClick={() => setCardTab(item.id)}
                >
                  {item.text}
                </button>
              </li>
            );
          })}
        </ul>
      </header>
      <div className="w-full grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-8">
        {cards &&
          cards.map((card) => (
            <Card
              key={card.name}
              name={card.name}
              logo={card.logo}
              description={card.description}
            />
          ))}
      </div>
    </section>
  );
};

export default CardContainer;
