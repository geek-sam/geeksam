import { Box } from "@mui/material";
import { motion, useMotionValue, useTransform } from "framer-motion";

const images = [
  "../../../public/images/AdminPortal.png",
  "../../../public/images/AdminPortal.png",
  "../../../public/images/AdminPortal.png",
  "../../../public/images/AdminPortal.png",
  "../../../public/images/AdminPortal.png",
  "../../../public/images/AdminPortal.png",
];

export default function Gallery3D() {
  const x = useMotionValue(0);

  // Apply 3D tilt effect
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);
  const scale = useTransform(x, [-300, 300], [0.9, 1]);

  return (
    <Box
      sx={{
        width: "100%",
        height: 350,
        overflow: "visible",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        perspective: "1200px",
        mt: 4,
      }}
    >
      <motion.div
        drag="x"
        // style={{ x }}
        dragConstraints={{ left: -600, right: 600 }}
        dragElastic={0.15}
        style={{
          display: "flex",
          gap: 30,
          transformStyle: "preserve-3d",
        }}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            style={{
              width: 200,
              height: 260,
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 16,
              transformOrigin: "center",
              rotateY,
              scale,
              boxShadow:
                "0 8px 40px rgba(0,0,0,0.25), 0 4px 20px rgba(0,0,0,0.15)",
            }}
          />
        ))}
      </motion.div>
    </Box>
  );
}
