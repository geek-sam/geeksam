import { Box, Typography } from "@mui/material";
import Capsul from "./Capsul";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

function CTASection() {
  return (
    <Box
      sx={{
        width: "90%",
        margin: "auto",
        color: "#fff",
        textAlign: "center",
        py: 8,
        bgcolor: "#0d6efd",
        borderRadius: 2,
      }}
    >
      <Capsul
        icon={""}
        label="Looking For a Designer?"
      />
      <Typography
        sx={{
          fontSize: "var(--subHeadingSize)",
          lineHeight: 1.4,
          width: "70%",
          color:"var(--headingColor)",
          margin: "auto",
        }}
      >
        {`Let's build something amazing together. Whether you have a project in mind or just want to say hello, feel free to reach out!`}
      </Typography>
    </Box>
  );
}

export default CTASection;
