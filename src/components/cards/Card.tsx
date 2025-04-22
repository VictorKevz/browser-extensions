import { useState } from "react";
import { CardProps } from "../../types/card";
import ToggleCardButton from "./ToggleCardButton";
import WarningModal from "../notifications/WarningModal";

const Card = ({ name, description, logo, isActive }: CardProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const onClose = () => {
    setShowModal(false);
  };
  return (
    <article className="w-full flex flex-col justify-between bg-[var(--neutral-0)] border border-[var(--neutral-200)] p-5 shadow-lg rounded-[1.25rem]">
      <header className="w-full flex items-start gap-4">
        <figure>
          <img
            src={logo}
            alt={`${name}'s Logo`}
            className="w-14 min-w-10 h-auto"
          />
        </figure>
        <div className="flex flex-col items-start gap-1">
          <h2 className="text-xl font-bold text-[var(--neutral-900)]">
            {name}
          </h2>
          <p className="text-base font-normal text-[var(--neutral-600)] tracking-tight">
            {description}
          </p>
        </div>
      </header>
      <footer className="w-full flex items-center justify-between mt-6">
        <button
          type="button"
          className="h-10 rounded-full border border-[var(--neutral-300)] px-4 text-[var(--neutral-900)]"
          onClick={() => setShowModal(!showModal)}
        >
          Remove
        </button>
        <ToggleCardButton name={name} isActive={isActive} />
      </footer>
      <div className="w-full">
        {showModal && <WarningModal onClose={onClose} />}
      </div>
    </article>
  );
};

export default Card;
