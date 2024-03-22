import {
  Box,
  // Button,
  Card,
  // CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useInView } from "react-intersection-observer";
// import React, { useRef } from "react";

const ProjectCard = (props) => {
  const { projectName, description, banner, technologies } = props;

  function truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
  }

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger when 50% of the element is visible
  });

  return (
    <Card
      ref={ref}
      className={`card animate__animated ${
        inView ? "animate__fadeInUp" : ""
      } animate__delay-.5s`}
      // className="card animate__animated animate__fadeInUp"
      elevation={0}
      sx={{
        maxWidth: 340,
        m: 2,
        bgcolor: "var(--bgColor)",
        color: "var(--headingColor)",
        borderRadius: "8px",
        border: "2px solid var(--cardBgColor)",
      }}
    >
      <CardMedia
        sx={{ height: 150, m: 1, borderRadius: "5px 5px 0 0 " }}
        image={banner}
        title="banner"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {projectName}
        </Typography>
        <Typography
          variant="body2"
          color="var(--textColor)"
          sx={{ textAlign: "justify", mb: 1 }}
        >
          {truncate(description, 150)}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {technologies.map((data, index) => (
            <span
              key={index}
              style={{
                padding: "5px 18px",
                // border: "2px solid var(--brandColor)",
                color: "var(--brandColor)",
                backgroundColor: "var(--cardBgColor)",
                borderRadius: "30px",
                marginTop: "10px",
                marginRight: "10px",
              }}
            >
              {data}
            </span>
          ))}
        </Box>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
};

export default ProjectCard;
