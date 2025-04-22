import { DeleteForever } from "@mui/icons-material";
import { WarningModalprops } from "../../types/notifications";
import { useCardContext } from "../../context/CardContext";

const WarningModal = ({ onClose, name }: WarningModalprops) => {
  const { onDelete } = useCardContext();
  return (
    <dialog className="w-full fixed min-h-screen top-0 left-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-[2px] transition-all duration-300 ease-in-out px-4">
      <div className="max-w-lg w-full flex flex-col justify-between bg-[var(--neutral-0)] py-5 rounded-xl shadow-xl border border-[var(--neutral-200)]">
        <header className="flex items-start gap-3 w-full px-5">
          <span className="min-w-11 min-h-11 bg-[var(--neutral-200)] rounded-lg flex items-center justify-center text-[var(--neutral-900)]">
            <DeleteForever />
          </span>
          <div className="flex flex-col gap-1">
            <h3 className="text-xl sm:text-2xl text-[var(--neutral-900)] font-bold">
              Confirm deletion!
            </h3>
            <p className="text-[var(--neutral-600)] text-xs sm:text-base">
              Are you sure you want to delete the Extension{" "}
              <strong>{name}</strong> ? This action can't be undone!
            </p>
          </div>
        </header>
        <footer className="w-full flex justify-end items-center mt-6 pt-3.5 px-5 gap-3 border-t border-[var(--neutral-300)]">
          <button
            type="button"
            className="h-10 px-4 text-[var(--neutral-900)] rounded-full border border-[var(--neutral-300)] font-medium"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => onDelete(name)}
            className="h-10 px-4 rounded-full bg-[var(--red-700)] text-[var(--neutral-0)] font-medium"
          >
            Delete
          </button>
        </footer>
      </div>
    </dialog>
  );
};

export default WarningModal;
