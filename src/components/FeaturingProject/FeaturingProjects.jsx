import { Box, Grid, Typography } from "@mui/material";
// import { useState } from "react";
import { featureProjects } from "../../../config";
import FeatureProjectCard from "./FeatureProjectCard";

function FeaturingProjects() {
  // const [items, setItems] = useState(featureProjects);
  return (
    <div>
      <Box sx={{ py: 4 }}>
        {/* Featuring Projects Section */}
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
          }}
          className="animate__animated animate__fadeInDown animate__delay-.5s"
        >
          Featured Projects
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
          }}
          className="animate__animated animate__fadeInDown animate__delay-.5s"
        >
          {/* Here is a glimpse of some of my recent and exciting projects. */}
          Here are some of my favorite projects that highlight my approach to
          solving real-world problems through design and development.
        </Typography>
        <Grid container spacing={4} sx={{ mt: 3 }}>
          {featureProjects.map((data, index) => (
            <Grid item xs={12} sm={12} md={12} lg={4} key={index}>
              <FeatureProjectCard
                banner={data.banner}
                projectName={data.projectName}
                description={data.description}
                projectType={data.projectType}
              />
            </Grid>
           ))}
        </Grid>
      </Box>
    </div>
  );
}

export default FeaturingProjects;
