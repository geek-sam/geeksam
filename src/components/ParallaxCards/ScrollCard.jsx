"use client";

import { Box, Typography, Grid, Chip } from "@mui/material";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import "./ScrollCard.css";

const MotionBox = motion.create(Box);

const ScrollCard = ({ banner, projectName, description, tags, color, bgcolor }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  // console.log(bgcolor)

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <Box
      ref={container}
      className="cardContainer"
      sx={{
        display: "flex",
        flexFlow: "column",
        flex: "none",
        alignItems: "center",
        justifyContent: "center",
        position: "sticky",
        top: { xs: "80px", md: "120px" },
        pointerEvents: "none",
        transformOrigin: "top",
      }}
    >
      <MotionBox
        sx={{
          position: "relative",
          width: "95%",
          borderRadius: "24px",
          padding: "48px",
          background: "var(--bgColor)",
          border: "1px solid var(--borderColor)",
          pointerEvents: "auto",
          overflow:"hidden"
        }}
        className="card"
      >
        <Box sx={{position: "absolute", top:0, left:0, background: bgcolor, height: "100%", width: "100%"}} />
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
            background: color,
          }}
        />
        <Grid container spacing={4} className="cardBody" sx={{position:"relative"}}>
          {/* Description Area */}
          <Grid item xs={12} md={7}>
            <Typography
              variant="h2"
              gutterBottom
              fontWeight={500}
              sx={{
                mb: 2,
                whiteSpace: "pre-line",
                fontSize: {xs:"28px", sm:"var(--headingSize)"},
                color: "var(--headingColor)",
              }}
            >
              {projectName}
            </Typography>

            <Typography
              variant="body1"
              gutterBottom
              sx={{
                mb: 4,
                maxWidth: {xs:"100%", md:"90%"},
                lineHeight: 1.6,
                fontSize: { xs: "14px", md: "16px" },
                color: "var(--textColor )",
              }}
            >
              {description}
            </Typography>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 1 }}>
              {tags.map((data, i) => (
                <Chip
                  label={data}
                  key={i}
                  sx={{
                    color: "var(--textColor)",
                    border: "1px solid var(--borderColor)",
                    borderRadius: "50px",
                    px: 1,
                    pt: 0.2,
                    backgroundColor: "var(--techBg)",
                    backdropFilter: "blur(10px)",
                  }}
                />
              ))}
            </Box>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={5}>
            <Box
              className="imageContainer"
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#222",
                // border:"4px solid var(---borderColor)"
              }}
            >
              <MotionBox
                className="inner"
                style={{
                  flex: 1,
                  scale: imageScale,
                  position: "relative",
                  borderRadius: "16px",
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.3)",
                  padding: 3,
                }}
              >
                <Box
                  component="img"
                  src={`/images/${banner}`}
                  alt="image"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // <--- fills the background
                    objectPosition: "center", // <--- keeps the main part visible
                    display: "block",
                    borderRadius: "16px",
                  }}
                />
              </MotionBox>
            </Box>
          </Grid>
        </Grid>
      </MotionBox>
    </Box>
  );
};

export default ScrollCard;
