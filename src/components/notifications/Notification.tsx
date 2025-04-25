import { Alert } from "@mui/material";
import { useCardContext } from "../../context/CardContext";
import { AnimatePresence, motion } from "framer-motion";
import { alertVariants } from "../../variants";

const Notification = () => {
  const { showAlert } = useCardContext();

  return (
    <AnimatePresence>
      {showAlert && (
        <motion.div
          className="max-w-xl w-full shadow-2xl"
          variants={alertVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Alert
            variant="outlined"
            severity="success"
            sx={{ color: "var(--neutral-900)" }}
          >
            Deleted Successfully!
          </Alert>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
