import Card from "./Card";
import { useCardContext } from "../../context/CardContext";
import { tabButtons } from "../../types/card";
import { useMemo } from "react";
import EmptyView from "../notifications/EmptyView";
import { motion } from "framer-motion";
import { viewVariants } from "../../variants";

const CardContainer = () => {
  const { cardTab, setCardTab, cards } = useCardContext();

  const filteredData = useMemo(() => {
    if (cardTab === "all") return cards;

    return cards.filter((card) =>
      cardTab === "active" ? card.isActive : !card.isActive
    );
  }, [cardTab, cards]);
  const isEmpty = filteredData.length === 0;

  return (
    <section className="w-full mt-16">
      <header className="w-full flex flex-col items-center md:flex-row md:justify-between gap-4">
        <h1 className="text-4xl text-[var(--neutral-900)]">Extension List</h1>
        <nav className="flex items-center gap-3" aria-label="Extension tabs">
          {tabButtons.map((item) => {
            const isActive = cardTab === item.id;
            return (
              <button
                key={item.id}
                className={`h-11 font-normal rounded-full px-5 ${
                  isActive
                    ? "bg-[var(--red-400)] text-[var(--neutral-0)]"
                    : "bg-[var(--neutral-0)] border border-[var(--neutral-200)] text-[var(--neutral-900)] hover:bg-[var(--red-400)] hover:text-[var(--neutral-0)]"
                }`}
                type="button"
                role="tab"
                id={`tab-${item.id}`}
                aria-controls={`panel-${item.id}`}
                aria-selected={isActive}
                aria-label={`View ${item.text} extensions`}
                onClick={() => setCardTab(item.id)}
              >
                {item.text}
              </button>
            );
          })}
        </nav>
      </header>

      <motion.div
        variants={viewVariants(20)}
        initial="hidden"
        animate="visible"
        key={cardTab}
        exit="exit"
        className="w-full grid grid-cols-1 gap-3 place-items-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-8"
      >
        {filteredData &&
          filteredData.map((card) => (
            <Card
              key={card.name}
              name={card.name}
              logo={card.logo}
              description={card.description}
              isActive={card.isActive}
            />
          ))}
      </motion.div>

      <div className="w-full flex items-center">{isEmpty && <EmptyView />}</div>
    </section>
  );
};

export default CardContainer;
