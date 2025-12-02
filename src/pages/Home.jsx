import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import DotGrid from "../components/DotGrid/DotGrid";
import avatar from "/images/avatar.jpg";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
// import { useTheme } from "@mui/material/styles";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
// import { useInView } from "react-intersection-observer";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import TiltedCard from "../components/TiltedCard/TiltedCard";
// import WhatIDo from "../components/WhatIDo";
import FeaturingProjects from "../components/FeaturingProject/FeaturingProjects";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import TestimonialSection from "../components/Testimonials/TestimonialSection";
import CTASection from "../components/CTASection";
import Capsul from "../components/Capsul";
// import Gallery3D from "../components/Gallery3D/Gallery3D";
import AboutSection from "../components/AboutSection/AboutSection";
// import ParallaxCards from "../components/ParallaxCards/ParallaxCards";
import CardContainer from "../components/ParallaxCards/CardContainer";

const Home = ({ theme }) => {
  // const [ref, inView] = useInView({
  //   triggerOnce: true, // Only trigger once
  //   threshold: 0.1, // Trigger when 50% of the element is visible
  // });

  const handleDownload = () => {
    const pdfUrl = `${window.location.origin}/assets/sam-cv.pdf`;
    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.download = "sam-cv.pdf";

    anchor.click();
  };
  return (
    <>
      <div style={{ width: "100%", height: "100vh", position: "absolute" }}>
        <DotGrid
          dotSize={2}
          gap={14}
          baseColor={theme === "darkTheme" ? "#090909" : "#ffffff"}
          activeColor="#0d6efd"
          proximity={150}
          shockRadius={250}
          shockStrength={5}
          resistance={650}
          returnDuration={2}
        />
      </div>
        <Box>
          {/* Hero Section */}
          <Box
            classmane="heroSection"
            sx={{
              mt: { xs: 12, md: 18 },
              px: { xs: 3, sm: 8 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: {xs:"780px",md:"800px"},
              py: { xs: 3, sm: 12 },
              position: "relative",
            }}
          >
            <TiltedCard
              imageSrc={avatar}
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="I'm Sam"
              containerHeight="140px"
              containerWidth="120px"
              imageHeight="140px"
              imageWidth="120px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={true}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={<p className="tilted-card-demo-text"> </p>}
            />

            <Capsul 
              icon={<WorkOutlineIcon sx={{ fontSize: 16 }} />}
              label="3+ years of Digital Wins"
              sx={{mt: 3,}}
            />  

            <Typography
              variant="h1"
              sx={{
                fontSize: {xs:"var(--headingSize)", md:"var(--heroSize)"},
                fontWeight: 700,
                color: "var(--headingColor)",
                mt: 4,
                maxWidth: "700px",
                lineHeight: {xs:"52px", md:"68px"},
                textAlign: "center",
              }}
              className="animate__animated animate__fadeInDown animate__delay-.5s"
            >
              Designing Experiences. Building Interfaces.
              {/* Design with purpose & build with passion. */}
            </Typography>
            <Typography
              className="animate__animated animate__fadeInUp animate__delay-.5s"
              variant="body1"
              sx={{
                fontSize: "var(--subHeadingSize)",
                fontWeight: 400,
                color: "var(--textColor)",
                mt: 3,
                lineHeight: "24px",
                maxWidth: "600px",
                textAlign: "center",
              }}
            >
              {/* From wireframes to front-end, I turn ideas into intuitive,
              high-performing web experiences. */}
              {/* Every detail matters, from the first sketch to the final line of code. */}
              {`I'm Sam - a UI/UX designer and frontend developer who loves
              crafting digital products that make life easier and experiences
              more enjoyable.`}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
              <Button
                className="animate__animated animate__fadeInUp animate__delay-.5s buttonPrimary"
                variant="contained"
                sx={{
                  minWidth: "150px",
                  py: 1,
                  mt: 5,
                  textTransform: "none",
                  backgroundColor: "var(--brandColor)",
                  borderRadius: "8px",
                }}
                onClick={handleDownload}
              >
                My Resume{" "}
                {<FileDownloadOutlinedIcon sx={{ fontSize: "18px", ml: 1 }} />}
              </Button>
              <Button
                className="animate__animated animate__fadeInUp animate__delay-.5s buttonSecondary"
                variant="contained"
                sx={{
                  minWidth: "150px",
                  py: 1,
                  mt: 5,
                  textTransform: "none",
                  backgroundColor: "var(--brandColor)",
                  borderRadius: "8px",
                }}
                // onClick={handleDownload}
              >
                About Me {<NorthEastIcon sx={{ fontSize: "18px", ml: 1 }} />}
              </Button>
            </Box>
          </Box>

          {/* <WhatIDo/> */}
          {/* Featuring Projects Section */}
          <CardContainer />
          {/* <FeaturingProjects /> */}

          {/* Services Section */}
          <ServiceSection />

          <AboutSection />
          {/* Testimonials */}
          <TestimonialSection />

          {/* <Gallery3D/> */}



          <CTASection />
        </Box>
    </>
  );
};

export default Home;
