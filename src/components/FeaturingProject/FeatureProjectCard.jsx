import { Box, Typography, IconButton, Card } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import avatar from "/images/avatar.jpg";
import { useInView } from "react-intersection-observer";

export default function FeatureProjectCard(props) {
  const { projectName, description, banner } = props;

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
        width: "100%",
        height: 420,
        // borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
        // border: "2px solid var(--cardBgColor)",
        "&:hover .bgImage": {
          transform: "scale(1.08)",
        },
        transition: "all 0.3s ease",
      }}
    >
      <Box
        className="bgImage"
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.5s ease",
        }}
      />
      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "50%",
          background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))",
        }}
      />

      {/* Text + Button */}
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          color: "white",
          display: "flex",
          alignItems:"flex-end",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ maxWidth: "70%" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 1,
            }}
          >
            {projectName}
          </Typography>

          <Typography
            sx={{
              fontSize: 14,
              lineHeight: 1.4,
              opacity: 0.9,
              // maxWidth: "90%",
            }}
          >
            {description}
          </Typography>
        </Box>

        {/* CTA Button */}
        <IconButton
        className="buttonPrimary"
          sx={{
            // backgroundColor: "#FFD000",
            color: "#fff",
            width: 48,
            height: 48,
            // "&:hover": { backgroundColor: "#ffcf00d9" },
          }}
        >
          <ArrowForwardRoundedIcon />
        </IconButton>
      </Box>
    </Card>
  );
}
