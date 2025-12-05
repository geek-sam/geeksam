import {
  Box,
  // Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import { useInView } from "react-intersection-observer";
// import React, { useRef } from "react";

const ProjectCard = (props) => {
  const { projectName, description, banner, link, setOpen } = props;

  // function truncate(str, maxlength) {
  //   return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
  // }

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger when 50% of the element is visible
  });

  return (
    <Card
      ref={ref}
      className={`animate__animated ${
        inView ? "animate__fadeInUp" : ""
      } animate__delay-.5s`}
      elevation={0}
      sx={{
        // maxWidth: 340,
        position: "relative",
        bgcolor: "var(--bgColor)",
        color: "var(--headingColor)",
        borderRadius: 4,
        border: "1px solid var(--cardBgColor)",
      }}
    >
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

      <CardContent>
        <Typography
          gutterBottom
          variant="h2"
          component="div"
          sx={{ fontSize: "18px", fontWeight: 600 }}
        >
          {projectName}
        </Typography>
        <Typography
          variant="body2"
          color="var(--textColor)"
          sx={{ textAlign: "left" }}
        >
          {/* {truncate(description, 120)} */} {description}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{
          height: 210,
          mx: 2,
          mb: 0,
          borderRadius: 2,
          border: "1px solid var(--borderColor)",
        }}
        image={banner}
        title={projectName}
      />
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
        <Link
          href={link || undefined}
          target={link ? "_blank" : undefined}
          rel={link ? "noopener noreferrer" : undefined}
          sx={{
            fontSize: "var(--fontSize)",
            color: "var(--brandColor)",
            textDecoration: "none",
            display: "flex",
            ml: 1,
            cursor: "pointer",
          }}
          onClick={(e) => {
            if (!link) {
              e.preventDefault(); // Prevent navigation
              setOpen(true); // Open modal
            }
          }}
        >
          View Project
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
