import { Box, Button, Container, Grid, Typography } from "@mui/material";
import AboutImg1 from "../../../public/images/AboutImg1.png";
import AboutImg2 from "../../../public/images/AboutImg2.png";
// import DotGrid from ".././DotGrid/DotGrid";
const grainTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;


function AboutSection() {
  return (
    <Container sx={{ position: "relative" }}>
      <Box
        className="noise-animate"
        sx={{
          position: "relative",
          border: "1px solid var(--borderColor)",
          width: "95%",
          mx: "auto",
          my: 8,
          py: 8,
          px: 4,
          borderRadius: "24px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(210deg, #0d6efd01 0%, #0d6efd07 50%, #0d6efd15 100%)",
              borderRadius:"24px"
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: grainTexture,
            opacity: 0.4,
            mixBlendMode: "overlay",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            zIndex: 11,
            top: 0,
            left: "18.5%",
            height: "1px",
            width: "63%",
            flex: "none",
            opacity: "1",
            transform: "none",
            background: "var(--borderHighlight)",
          }}
        />
        <Grid container spacing={12}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box
              sx={{
                position: "relative",
                width: { xs: "260px", sm: "360px" },
                height: { xs: "260px", sm: "360px" },
                margin: "auto",

                // Radial Glow
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "420px",
                  height: "420px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(13,110,253,0.22), transparent 75%)",
                  filter: "blur(40px)",
                  zIndex: 0, // behind images
                  transition: "all 0.4s ease",
                },

                // Hover effect (optional)
                "&:hover::before": {
                  opacity: 1,
                  transform: "translate(-50%, -52%) scale(1)",
                  filter: "blur(60px)",
                },
                "&:hover .image1": {
                  transform: "translateY(-25px) rotate(-12deg) !important",
                  bottom: 40,
                },

                "&:hover .image2": {
                  transform:
                    "translateX(30px) translateY(-30px) rotate(18deg) !important",
                  bottom: 60,
                },
              }}
            >
              {/* Polaroid 1 */}
              <Box
                component="img"
                className="image1"
                src={AboutImg1}
                alt="My 1st Image"
                sx={{
                  width: "200px",
                  position: "absolute",
                  bottom: 20,
                  left: 0,
                  transform: "rotate(-8deg)",
                  transition: "all 0.4s ease",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              />

              {/* Polaroid 2 */}
              <Box
                component="img"
                className="image2"
                src={AboutImg2}
                alt="My 2nd Image"
                sx={{
                  width: "200px",
                  position: "absolute",
                  bottom: 70,
                  right: 0,
                  transform: "rotate(15deg)",
                  transition: "all 0.4s ease",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontSize: "var(--headingSize)",
                fontWeight: 600,
                color: "var(--headingColor)",
                maxWidth: "700px",
                lineHeight: "48px",
              }}
              className="animate__animated animate__fadeInDown animate__delay-.5s"
            >
              About Me
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontSize: "var(--heading2Size)",
                fontWeight: 500,
                color: "var(--textColor)",
                lineHeight: "32px",
                mt: 4,
              }}
              className="animate__animated animate__fadeInDown animate__delay-.5s"
            >
              {/* Here is a glimpse of some of my recent and exciting projects. */}
              I’m Sam - a Front-end Developer and UI/UX Designer passionately
              creating engaging, user-centric digital experiences for over 3
              years.
            </Typography>

            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontSize: "var(--fontSize)",
                fontWeight: 400,
                color: "var(--iconColor)",
                lineHeight: "24px",
                mt: 2,
              }}
              className="animate__animated animate__fadeInDown animate__delay-.5s"
            >
              I believe good design starts with empathy — understanding people,
              their challenges, and how technology can make their lives easier.
              My journey has been a mix of curiosity, creativity, and a love for
              building things that truly connect with users.
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
              }}
            >
              {`More about me`}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default AboutSection;
