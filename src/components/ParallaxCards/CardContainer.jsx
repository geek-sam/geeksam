"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
// import { projects } from '../data';
// import Card from '../components/Card';
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import ScrollCard from "./ScrollCard";
import { featureProjects } from "../../../config";

export default function CardContainer() {
  const container = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <Container sx={{ position: "relative" }}>
      <Box
        ref={container}
        sx={{
          position: "relative",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontSize: "var(--headingSize)",
            fontWeight: 600,
            color: "var(--headingColor)",
            mt: 4,
            maxWidth: "700px",
            lineHeight: "48px",
            textAlign: "center",
            mx: "auto",
          }}
          className="animate__animated animate__fadeInDown animate__delay-.5s"
        >
          Featured Works
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
          {/* Here is a glimpse of some of my recent and exciting projects. */}
          Here are some of my favorite projects that highlight my approach to
          solving real-world problems through design and development.
        </Typography>
        <Stack spacing={8}>
          {featureProjects.map((project, i) => (
            <ScrollCard key={`p_${i}`} i={i} {...project} />
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
