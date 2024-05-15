import { Box, Container, Divider, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../../config";
import { useState } from "react";

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
      <Container>
        <Box sx={{ mt: 15, px: { xs: 3, sm: 8 } }}>
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
            Things I have made
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
            I’ve worked on a lots of small small projects over the years but
            these are the ones that I’m most proud of.
            {/* Many of them are open-source, so if you see something that grabs your interest, check
            out the code and contribute if you have ideas for how it can be
            improved. */}
          </Typography>
          {/* <Divider sx={{ mt: 5, bgcolor: "var(--cardBgColor)" }} /> */}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
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
        <Box
          sx={{
            mt: 3,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            px: { xs: 3, sm: 2 },
          }}
        >
          {items.map((data, index) => (
            <ProjectCard
              key={index}
              banner={data.banner}
              projectName={data.projectName}
              description={data.description}
              technologies={data.technologies}
              duration={data.duration}
            />
          ))}
        </Box>
      </Container>
    </div>
  );
};
export default Projects;
