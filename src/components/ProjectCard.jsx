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
      className={`animate__animated ${
        inView ? "animate__fadeInUp" : ""
      } animate__delay-.5s`}
      elevation={0}
      sx={{
        width: 340,
        m: 2,
        bgcolor: "var(--bgColor)",
        color: "var(--headingColor)",
        // borderRadius: "8px",
        // border: "2px solid var(--cardBgColor)",
      }}
    >
      <CardMedia sx={{ height: 150, mx: 2 }} image={banner} title="banner" />
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
          sx={{ textAlign: "justify", mb: 1 }}
        >
          {truncate(description, 100)}
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
                padding: "3px 12px",
                color: "var(--brandColor)",
                backgroundColor: "var(--techBg)",
                borderRadius: "30px",
                marginTop: "10px",
                marginRight: "5px",
                fontSize: "12px",
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
