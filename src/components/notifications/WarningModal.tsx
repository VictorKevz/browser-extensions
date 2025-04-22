import { DeleteForever } from "@mui/icons-material";
import { WarningModalprops } from "../../types/notifications";

const WarningModal = ({ onClose }: WarningModalprops) => {
  return (
    <dialog className="w-full fixed min-h-screen top-0 left-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-[2px] transition-all duration-300 ease-in-out">
      <div className="max-w-lg w-full flex flex-col justify-between bg-[var(--neutral-0)] p-5 rounded-2xl">
        <header className="flex items-start gap-3 w-full">
          <span className="min-w-11 min-h-11 bg-[var(--neutral-200)] rounded-xl flex items-center justify-center">
            <DeleteForever />
          </span>
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl text-[var(--neutral-900)] font-bold">
              Confirm deletion!
            </h3>
            <p className="text-[var(--neutral-600)] text-base">
              Are you sure you want to delete extension <strong>{}</strong> ?
              This action can't be undone
            </p>
          </div>
        </header>
        <footer className="w-full flex justify-end items-center mt-6 gap-3">
          <button
            type="button"
            className="h-10 px-4 rounded-full border border-[var(--neutral-300)]"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="h-10 px-4 rounded-full bg-[var(--red-700)]"
          >
            Delete
          </button>
        </footer>
      </div>
    </dialog>
  );
};

export default WarningModal;
