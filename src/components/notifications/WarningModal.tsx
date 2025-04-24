import { Close, DeleteForever } from "@mui/icons-material";
// import { WarningModalprops } from "../../types/notifications";
import { useCardContext } from "../../context/CardContext";
import FocusTrap from "@mui/material/Unstable_TrapFocus";
// import { motion } from "framer-motion";

const WarningModal = () => {
  const { onDelete, toggleModal, cardName, showModal } = useCardContext();

  if (!showModal) return null;
  return (
    <FocusTrap open>
      <div className="w-full min-h-screen fixed top-0 left-0 flex items-center justify-center z-100 bg-black/60 backdrop-blur-[2px] transition-all duration-300 ease-in-out px-4">
        <div
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          tabIndex={-1}
          className="max-w-lg w-full flex flex-col justify-between bg-[var(--neutral-0)] py-5 rounded-xl shadow-xl border border-[var(--neutral-200)] relative m-0"
        >
          <header className="flex items-start gap-3 w-full px-5 mt-8 sm:mt-6">
            <span className="min-w-11 min-h-11 bg-[var(--neutral-200)] rounded-lg flex items-center justify-center text-[var(--neutral-900)]">
              <DeleteForever aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-1">
              <h3
                id="modal-title"
                className="text-xl sm:text-2xl text-[var(--neutral-900)] font-bold"
              >
                Confirm deletion!
              </h3>
              <p
                id="modal-description"
                className="text-[var(--neutral-600)] text-xs sm:text-base"
              >
                Are you sure you want to delete the Extension{" "}
                <strong>{cardName}</strong>? This action can't be undone!
              </p>
            </div>
          </header>
          <footer className="w-full flex justify-end items-center mt-6 pt-3.5 px-5 gap-3 border-t border-[var(--neutral-300)]">
            <button
              type="button"
              className="h-10 px-4 text-[var(--neutral-900)] rounded-full border border-[var(--neutral-300)] font-medium hover:bg-[var(--neutral-200)] hover:border-[var(--neutral-200)]"
              onClick={() => toggleModal(cardName)}
              aria-label="Cancel deletion"
              autoFocus
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => onDelete(cardName)}
              aria-label={`Confirm deletion of ${cardName}`}
              className="h-10 px-4 rounded-full bg-[var(--red-700)] text-[var(--neutral-0)] font-medium border border-transparent hover:border-[var(--red-700)] hover:bg-inherit hover:text-[var(--neutral-900)]"
            >
              Delete
            </button>
          </footer>
          <button
            type="button"
            onClick={() => toggleModal(cardName)}
            aria-label="Close dialog"
            className="absolute right-4 top-4 w-8 h-8 rounded-full border border-[var(--neutral-200)] text-[var(--neutral-900)] hover:bg-[var(--neutral-200)]"
          >
            <Close fontSize="medium" aria-hidden="true" />
          </button>
        </div>
      </div>
    </FocusTrap>
  );
};

export default WarningModal;
