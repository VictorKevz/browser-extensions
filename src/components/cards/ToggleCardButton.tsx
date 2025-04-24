import { Switch } from "@mui/material";
import { ToggleCardButtonProps } from "../../types/card";
import { useCardContext } from "../../context/CardContext";

const ToggleCardButton = ({ name, isActive }: ToggleCardButtonProps) => {
  const { onToggle } = useCardContext();

  return (
    <Switch
      checked={isActive}
      name={name}
      id={`switch-${name}`}
      aria-label={`Toggle extension ${name}`}
      onChange={() => onToggle(name)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === "Space") {
          e.preventDefault();
          onToggle(name);
        }
      }}
      sx={{
        "& .MuiSwitch-switchBase.Mui-checked": {
          color: "var(--red-700)",
        },
        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
          backgroundColor: "var(--red-700)",
        },
        "& .MuiSwitch-track": {
          backgroundColor: "var(--neutral-900)",
        },
      }}
    />
  );
};

export default ToggleCardButton;
