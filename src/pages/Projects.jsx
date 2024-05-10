import { Box, Container } from "@mui/material";
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            mt: 15,
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
            // px: { xs: 3, sm: 8 },
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
