import { Avatar, Paper, Typography } from "@mui/material";
// import avatar from "../images/avatar.jpg";
import { useInView } from "react-intersection-observer";

const OfferingCard = (props) => {
  const { icon, heading, desc } = props;

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger when 50% of the element is visible
  });

  return (
    <div>
      <Paper
        elevation={0}
        ref={ref}
        className={`card animate__animated ${
          inView ? "animate__fadeInUp" : ""
        } animate__delay-.5s`}
        sx={{
          background: "none",
          p: 3,
          borderRadius: "10px",
          m: 1,
        }}
      >
        <Avatar
          alt={heading}
          src={icon}
          sx={{
            width: 62,
            height: 62,
            bgcolor: "var(--brandColor)",
            border: "7px solid var(--cardBgColor)",
          }}
        />
        <Typography
          variant="h4"
          sx={{
            fontSize: "var(--subHeadingSize)",
            fontWeight: 600,
            color: "var(--headingColor)",
            mt: 2,
            lineHeight: "28px",
            maxWidth: "700px",
          }}
        >
          {heading}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "var(--fontSize)",
            fontWeight: 400,
            color: "var(--textColor)",
            mt: 1,
            lineHeight: "28px",
            maxWidth: "700px",
          }}
        >
          {desc}
        </Typography>
      </Paper>
    </div>
  );
};

export default OfferingCard;
