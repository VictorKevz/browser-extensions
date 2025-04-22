import { Alert } from "@mui/material";
import { useCardContext } from "../../context/CardContext";

const Notification = () => {
  const { showAlert } = useCardContext();
  if (!showAlert) return null;
  return (
    <div className="max-w-xl w-full shadow-2xl">
      <Alert variant="filled" severity="success">
        Successfully Deleted!
      </Alert>
    </div>
  );
};

export default Notification;
