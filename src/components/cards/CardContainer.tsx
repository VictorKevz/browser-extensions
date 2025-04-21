import { useState } from "react";
import data from "../../data.json";
const CardContainer = () => {
  const [active, setActive] = useState("all");
  return (
    <section className="w-full mt-16">
      <header className="w-full flex flex-col items-center md:flex-row md:justify-between gap-4">
        <h1 className="text-4xl">Extension List</h1>
        <ul className="flex items-center gap-3">
          {statusButtons.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <button
                  className={`h-11 font-normal rounded-full px-5 ${
                    isActive
                      ? "bg-[var(--red-400)] text-[var(--neutral-0)]"
                      : "bg-[var(--neutral-0)] border border-[var(--neutral-200)] text-[var(--neutral-900)]"
                  }`}
                  type="button"
                  onClick={() => setActive(item.id)}
                >
                  {item.text}
                </button>
              </li>
            );
          })}
        </ul>
      </header>
      <div className="w-full grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {data.map((card) => (
          <article
            key={card.name}
            className="w-full bg-[var(--neutral-0)] border border-[var(--neutral-200)] p-5 shadow-lg rounded-[1.25rem]"
          >
            <header className="w-full flex items-start gap-4">
              <figure>
                <img
                  src={card.logo}
                  alt={`${card.name}'s Logo`}
                  className="w-14 min-w-10 h-auto"
                />
              </figure>
              <div className="flex flex-col items-start gap-1">
                <h2 className="text-xl font-bold text-[var(--neutral-900)]">
                  {card.name}
                </h2>
                <p className="text-base font-normal text-[var(--neutral-600)] tracking-tight">
                  {card.description}
                </p>
              </div>
            </header>
            <footer className="w-full flex items-center justify-between">
              <button type="button">Remove</button>
              <button type="button">Toggle</button>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CardContainer;

// eslint-disable-next-line react-refresh/only-export-components
export const statusButtons = [
  { id: "all", text: "All" },
  { id: "active", text: "Active" },
  { id: "inactive", text: "Inactive" },
];
