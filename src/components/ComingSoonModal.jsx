import { Modal, Box, Typography } from "@mui/material";

export default function ComingSoonModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50vw",
          height: "50vh",
          display: "flex",
          borderRadius:6,
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "var(--bgColor)",
          overflow: "hidden",
          outline: "none",
        }}
      >
        {/* Glowing Blackhole Animation */}
        <Box
          sx={{
            width: 250,
            height: 80,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 50% 30%, rgba(13, 110, 253, 0.8), rgba(13, 110, 253, 0.3) 55%, rgba(13, 110, 253, 0) 85%);",
            filter: "blur(40px)",
            animation: "pulse 4s infinite ease-in-out",
            position: "absolute",
            top: "28%",
          }}
        />

        {/* Main Half-Blackhole */}
        <Box
          sx={{
            width: 300,
            height: 150,
            borderBottomLeftRadius: "500px",
            borderBottomRightRadius: "500px",
            background: "linear-gradient(to bottom, var(--bgColor), var(--bgColor))",
            position: "absolute",
            transform:"rotate(180deg)",
            top: "28%",
            animation: "glow 3s infinite ease-in-out",
          }}
        />

        {/* Text Section */}
        <Box sx={{ textAlign: "center", position: "absolute", bottom: "20%" }}>
          <Typography
            sx={{
              letterSpacing: ".6rem",
              fontSize: "2rem",
              fontWeight: 300,
              color: "var(--headingColor)",
              textTransform: "uppercase",
              animation: "fadeIn 2s ease",
            }}
          >
            Coming Soon
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontSize: "0.9rem",
              letterSpacing: "0.5rem",
              color: "var(--brandColor)",
              textTransform: "uppercase",
            }}
          >
            Stay Tuned
          </Typography>
        </Box>

        {/* Keyframes */}
        <style>
          {`
            @keyframes upAndDown {
            0% {
                transform: translateY(0); /* Starting position */
                }
            50% {
                transform: translateY(-20px); /* Peak position (moves 20px up) */
                }
            100% {
                transform: translateY(0); /* Returns to starting position */
                }
            }

            .animated-element {
              animation-name: upAndDown;
              animation-duration: 2s; /* Duration of one full cycle */
              animation-iteration-count: infinite; /* Loops indefinitely */
              animation-timing-function: ease-in-out; /* Smooth start and end */
            }
          `}
        </style>
      </Box>
    </Modal>
  );
}
