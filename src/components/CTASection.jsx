import { Box, Button, Container, Typography } from "@mui/material";
// import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LineIllustration from "../../public/images/LineIllustration.png"

function CTASection() {
  return (
    <Container sx={{ position: "relative" }}>
    <Box
      sx={{
        // width: "95%",
        margin: "auto",
        px: { xs: 4, sm: 6, md: 8 },
        py:{ xs:4, md:6},
        bgcolor: "#000",
        borderRadius: 4,
        position:"relative",
        overflow:"hidden"
      }}
    >
      {/* <Capsul
        icon={""}
        label="Looking For a Designer?"
      /> */}
      <Box sx={{position:"relative", zIndex:1}}>
      <Typography
        sx={{
          fontSize: {xs:"32px", md:"var(--headingSize)"},
          lineHeight: 1.2,
          fontWeight: 700,
          // mt:2,
          color:"#fff",
        }}
      >
        {`It's time to Accelerate Your`}
      </Typography>
      <Typography
        sx={{
          fontSize: {xs:"32px", md:"var(--headingSize)"},
          lineHeight: 1.2,
          fontWeight: 700,
          color:"var(--brandColor)",
        }}
      >
        {`Digital Transformation Journey`}
      </Typography>

      <Button
      className="animate__animated animate__fadeInUp animate__delay-.5s buttonPrimary"
                variant="contained"
                sx={{
                  minWidth: "180px",
                  py: 1,
                  mt: 4,
                  textTransform: "none",
                  backgroundColor: "var(--brandColor)",
                  borderRadius: "8px",
                }}>
                  {`Let's Discuss`}
      </Button>
      </Box>
      <img src={LineIllustration} alt="" style={{position:"absolute", height:"270px", top:"0", right:"0"}} />
    </Box>
    </Container>
  );
}

export default CTASection;
