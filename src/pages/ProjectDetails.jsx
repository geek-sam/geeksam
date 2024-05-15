import { Box, Container, Typography } from "@mui/material";
import adminPortal from "/images/AdminPortal.png";

function ProjectDetails() {
  return (
    <div>
      <Container>
        <Box
          sx={{
            mt: { xs: 12, sm: 18 },
            px: { xs: 3, sm: 8 },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "var(--heroSize)",
              fontWeight: 700,
              color: "var(--headingColor)",
              mt: { xs: 0, sm: 2, md: 3, lg: 4 },
            }}
          >
            Dating App - Admin Website
          </Typography>
          <img
            src={adminPortal}
            alt=""
            width="100%"
            style={{
              borderRadius: "5px",
              marginTop: "30px",
              borderImage: "linear-gradient(#0003, #000) 0 fill",
            }}
          />
        </Box>
      </Container>
    </div>
  );
}

export default ProjectDetails;
