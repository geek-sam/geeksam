import { Box, Typography, Avatar, Container } from "@mui/material";
import Marquee from "react-fast-marquee";
import { testimonials } from "../../../config"

function TestimonialSection() {
  return (
    <Container sx={{ position: "relative" }}>
      <Box
        sx={{
          width: "100%",
          pb: 16,
          pt: 8,
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontSize: "var(--headingSize)",
            fontWeight: 600,
            color: "var(--headingColor)",
            maxWidth: "700px",
            lineHeight: "48px",
            textAlign: "center",
            mx: "auto",
          }}
          className="animate__animated animate__fadeInDown animate__delay-.5s"
        >
          Testimonials
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            fontSize: "var(--subHeadingSize)",
            fontWeight: 400,
            color: "var(--textColor)",
            lineHeight: "24px",
            maxWidth: "600px",
            textAlign: "center",
            mx: "auto",
            mb: 6,
          }}
          className="animate__animated animate__fadeInDown animate__delay-.5s"
        >
          {`The best part of my work is the people I get to collaborate with. Here's what some of them have shared about working together.`}
        </Typography>
        <div className="w-screen overflow-hidden -ml-[calc((100vw-100%)/2)]">
          <Marquee
            speed={40}
            pauseOnHover={true}
            style={{ width: "100%" }}
            gradient={true}
            gradientColor="var(--bgColor)"
            gradientWidth={150}
          >
            {testimonials.map((item, i) => (
              <Box
                className="gradientBorder"
                key={i}
                sx={{
                  background: "var(--cardBgColor)",
                  maxWidth: "320px",
                  p: 3,
                  mx: 2,
                  borderRadius: 3,
                  overflow: "hidden",
                  position: "relative",
                  boxSizing:"border-box",
                  border: "1px solid var(--borderColor)",
                }}
                >
                {/* <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                      "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 0)",
                    backgroundSize: "6px 6px",
                    opacity: 0.18,
                    pointerEvents: "none",
                  }}
                /> */}
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
                <Typography sx={{ fontSize: 15, color: "var(--textColor)",  lineHeight: 1.6, mb:3 }}>
                  {item.text}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                  <Avatar
                    src={item.avatar}
                    sx={{ width: 48, height: 48 }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 500, color: "var(--headingColor)", lineHeight:1.4 }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14, color: "var(--iconColor)"}}
                    >
                      {item.role}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Marquee>
        </div>
      </Box>
    </Container>
  );
}

export default TestimonialSection;
