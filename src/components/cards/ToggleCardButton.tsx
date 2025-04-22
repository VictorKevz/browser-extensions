import { Switch } from "@mui/material";
import { ToggleCardButtonProps } from "../../types/card";
import { useCardContext } from "../../context/CardContext";

const ToggleCardButton = ({ name, isActive }: ToggleCardButtonProps) => {
  const { onToggle } = useCardContext();

  return <Switch checked={isActive} onChange={() => onToggle(name)} />;
};

export default ToggleCardButton;
