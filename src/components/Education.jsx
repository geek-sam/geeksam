import { Box, Typography } from "@mui/material";
import WorkListItem from "./WorkListItem";
import { useInView } from "react-intersection-observer";

const Education = (props) => {
  const { courseName, collegeName, duration, avatar, description } = props;
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger when 50% of the element is visible
  });
  return (
    <Box
      ref={ref}
      className={`card animate__animated ${
        inView ? "animate__fadeInUp" : ""
      } animate__delay-.5s`}
      sx={{
        mt: 2,
        borderLeft: "2px solid var(--borderColor)",
        px: 3,
        pb: 2,
        position: "relative",
      }}
    >
      <div
        style={{
          border: "2px solid var(--brandColor)",
          backgroundColor: "var(--bgColor)",
          borderRadius: "50%",
          width: "10px",
          height: "10px",
          position: "absolute",
          left: "-6px",
          top: `30px`,
        }}
      ></div>
      <WorkListItem
        companyName={courseName}
        jobRoll={collegeName}
        duration={duration}
        avatar={avatar}
      />
      <Typography
        variant="body1"
        sx={{
          fontSize: "var(--fontSize)",
          fontWeight: 400,
          color: "var(--textColor)",
          lineHeight: "28px",
          textAlign: "justify",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default Education;
