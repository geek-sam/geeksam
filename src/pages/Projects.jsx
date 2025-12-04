import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../../config";
import { useState } from "react";
import ScrollCard from "../components/ParallaxCards/ScrollCard";
import CTASection from "../components/CTASection";
import ComingSoonModal from "../components/ComingSoonModal";

const Projects = () => {
  const style = {
    border: "2px solid var(--cardBgColor)",
    padding: "5px 22px 6px 22px",
    // spacing: "10px",
    borderRadius: "30px",
    background: "none",
    color: "var(--textColor)",
  };

  const [items, setItems] = useState(projects);
  const [active, setActive] = useState(1);
  const [open, setOpen] = useState(false);

  const filterItem = (item) => {
    const updatedItems = projects.filter((currentElement) => {
      return currentElement.projectType === item;
    });
    setItems(updatedItems);
  };
  // const handleActive = (id) => {
  //   setActive(id);
  // };

  return (
    <div>
      <Container sx={{ px: { xs: 3, sm: 8 } }}>
        <Box sx={{ mt: 15 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "var(--heroSize)",
              fontWeight: 700,
              color: "var(--headingColor)",
              mt: 4,
              maxWidth: "700px",
            }}
          >
            My works
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "var(--subHeadingSize)",
              fontWeight: 400,
              color: "var(--textColor)",
              mt: 1,
              lineHeight: "28px",
              maxWidth: "700px",
            }}
          >
            Here are some of my most exciting projects—ranging from web
            development to sleek UI designs. Each project reflects my passion
            for building functional, scalable, and visually appealing digital
            experiences.
          </Typography>
          <Divider sx={{ mt: 5, bgcolor: "var(--cardBgColor)" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            mt: 5,
            gap: "15px",
          }}
        >
          <button
            style={style}
            onClick={() => {
              setItems(projects);
              setActive(1);
            }}
            className={active === 1 ? "active" : ""}
          >
            All
          </button>
          <button
            style={style}
            onClick={() => {
              filterItem("reactApp"), setActive(2);
            }}
            className={active === 2 ? "active" : ""}
          >
            React
          </button>
          <button
            style={style}
            onClick={() => {
              filterItem("static"), setActive(3);
            }}
            className={active === 3 ? "active" : ""}
          >
            Static
          </button>
          <button
            style={style}
            onClick={() => {
              filterItem("uiDesign"), setActive(4);
            }}
            className={active === 4 ? "active" : ""}
          >
            UI Design
          </button>
        </Box>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {items.map((data, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <ProjectCard
              key={index}
              banner={data.banner}
              projectName={data.projectName}
              description={data.description}
              technologies={data.technologies}
              link={data.link}
              open={open}
              setOpen={setOpen}
            />
            </Grid>
          ))}
        </Grid>
        {/* <Stack spacing={8}>
          {items.map((project, i) => (
            <ScrollCard key={`p_${i}`} i={i} {...project} />
          ))}
        </Stack> */}
        <ComingSoonModal open={open} onClose={() => setOpen(false)}/>

        <CTASection />
      </Container>
    </div>
  );
};
export default Projects;
