import { Chip } from "@mui/material";

function Capsul({
  label,
  icon,
  sx = {},
  className = "",
}) {
  return (
    <Chip
      icon={icon}
      label={label}
      sx={{
        position: "relative",
        color: "var(--textColor)",
        fontSize: "var(--fontSize)",
        bgcolor: "var(--cardBgColor)",
        px: 1,
        ...sx, // allow overrides
      }}
      className={`animate__animated animate__fadeInDown animate__delay-.5s ${className}`}
    />
  );
}

export default Capsul;
