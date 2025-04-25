import { CardProps } from "../../types/card";
import ToggleCardButton from "./ToggleCardButton";
import { useCardContext } from "../../context/CardContext";
const Card = ({ name, description, logo, isActive }: CardProps) => {
  const { toggleModal } = useCardContext();

  return (
    <article
      className="w-full flex flex-col justify-between bg-[var(--neutral-0)] border border-[var(--neutral-200)] p-5 min-h-40 shadow-lg rounded-[1.25rem] cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-[-2px]"
      aria-labelledby={`card-title-${name}`}
    >
      <header className="w-full flex items-start gap-4">
        <figure>
          <img
            src={logo}
            alt={`${name} logo`}
            className="w-14 min-w-10 h-auto"
          />
        </figure>
        <div className="flex flex-col items-start gap-1">
          <h2
            id={`card-title-${name}`}
            className="text-xl font-bold text-[var(--neutral-900)]"
          >
            {name}
          </h2>
          <p
            className="text-base font-normal text-[var(--neutral-600)] tracking-tight"
            aria-describedby={`card-desc-${name}`}
          >
            {description}
          </p>
        </div>
      </header>
      <footer className="w-full flex items-center justify-between mt-6">
        <button
          type="button"
          className="h-10 rounded-full border border-[var(--neutral-300)] px-4 text-[var(--neutral-900)] hover:bg-[var(--neutral-300)]"
          onClick={() => toggleModal(name)}
          aria-label={`Remove ${name}`}
        >
          Remove
        </button>
        <ToggleCardButton name={name} isActive={isActive} />
      </footer>
    </article>
  );
};

export default Card;
