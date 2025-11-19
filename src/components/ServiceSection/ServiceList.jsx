import { HugeiconsIcon } from "@hugeicons/react";
import * as HugeiconSet from "@hugeicons/core-free-icons";
import { Box, Typography } from "@mui/material";

function ServiceList(props) {
  const { iconName, serviceName, serviceDesc } = props;
  const iconStyle = {
    display: "flex",
    bgcolor: "var(--cardBgColor)",
    color: "var(--textColor)",
    borderRadius: "8px",
    p: 1,
    mr: 2,
  };

  const Icon = HugeiconSet[iconName];   
  return (
    <Box sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Box sx={iconStyle}>
            {Icon && <HugeiconsIcon icon={Icon} />}
          
        </Box>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            fontSize: "var(--heading2Size)",
            fontWeight: 500,
            color: "var(--headingColor)",
            lineHeight: "24px",
            maxWidth: "600px",
            mt: 0.5,
          }}
          className="animate__animated animate__fadeInDown animate__delay-.5s"
        >
          {/* Here is a glimpse of some of my recent and exciting projects. */}
          {serviceName}
        </Typography>
      </Box>
      <Typography
        variant="body1"
        gutterBottom
        sx={{
          fontSize: "var(--fontSize)",
          fontWeight: 400,
          color: "var(--textColor)",
          lineHeight: "24px",
          maxWidth: "450px",
          ml: 7,
        }}
        className="animate__animated animate__fadeInDown animate__delay-.5s"
      >
        {/* Here is a glimpse of some of my recent and exciting projects. */}
        {serviceDesc}
      </Typography>
    </Box>
  );
}

export default ServiceList;
