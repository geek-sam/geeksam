import { Box, Button, Container, Grid, Typography } from "@mui/material";
import profile from "/images/profile.jpg";
import SocialLinks from "../components/SocialLinks";
import EastIcon from "@mui/icons-material/East";
import Experience from "../components/Experience";
import { educations, experience } from "../../config";
import Education from "../components/Education";
import { useInView } from "react-intersection-observer";
import { PopupModal } from "react-calendly";
import { useState } from "react";

const About = (props) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    // threshold: 0.1, // Trigger when 50% of the element is visible
  });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Container>
        <Box sx={{ mt: { xs: 12, sm: 18 }, px: { xs: 3, sm: 8 } }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid
              item
              xs={12}
              lg={6}
              order={{ xs: 1, sm: 1, lg: 2 }}
              sx={{
                height: "340px",
              }}
            >
              <Box
                ref={ref}
                className={`animate__animated ${
                  inView ? "animate__fadeInDown" : ""
                } animate__delay-.5s`}
                sx={{ ml: { xs: 0, sm: 0, md: 0, lg: 10 }, marginTop: "30px" }}
              >
                <img
                  src={profile}
                  alt=""
                  width="250px"
                  style={{
                    transform: "rotate(3deg)",
                    borderRadius: "20px",
                  }}
                />
              </Box>

              <Box
                sx={{
                  ml: 7,
                  display: { xs: "none", sm: "none", md: "none", lg: "block" },
                }}
                ref={ref}
                className={`animate__animated ${
                  inView ? "animate__fadeInUp" : ""
                } animate__delay-.5s`}
              >
                <SocialLinks />
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} order={{ xs: 2, sm: 2, lg: 1 }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: "var(--heroSize)",
                  fontWeight: 700,
                  color: "var(--headingColor)",
                  mt: { xs: 0, sm: 2, md: 3, lg: 4 },
                }}
                ref={ref}
                className={`animate__animated ${
                  inView ? "animate__fadeInDown" : ""
                } animate__delay-.5s`}
              >
                Sam: <br />
                In details
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "var(--fontSize)",
                  fontWeight: 400,
                  color: "var(--textColor)",
                  mt: 3,
                  lineHeight: "28px",
                  //   maxWidth: "700px",
                }}
                ref={ref}
                className={`animate__animated ${
                  inView ? "animate__fadeInUp" : ""
                } animate__delay-.5s`}
              >
                As a passionate Frontend Developer and UI/UX Designer, I bring a
                wealth of expertise in crafting dynamic and visually appealing
                web solutions. My proficiency spans HTML, CSS, JavaScript,
                Bootstrap, and ReactJS, enabling me to seamlessly blend
                aesthetics with functionality. With a keen eye for detail, I
                excel in UI/UX design using industry-standard tools such as
                Figma, Photoshop, Illustrator, and XD.
              </Typography>
              {/* <Typography
              variant="body1"
              sx={{
                fontSize: "var(--fontSize)",
                fontWeight: 400,
                color: "var(--textColor)",
                mt: 3,
                lineHeight: "28px",
                //   maxWidth: "700px",
              }}
            >
              My mission is to create web experiences that transcend
              expectations, placing user experience at the forefront. Whether
              it's through responsive designs, intuitive interfaces, or
              innovative interactions, I am dedicated to transforming ideas into
              polished, interactive, and user-centric designs. I thrive on
              solving challenges and embrace technology with enthusiasm,
              constantly seeking ways to enhance digital experiences.
            </Typography> */}
              <Typography
                variant="body1"
                sx={{
                  fontSize: "var(--fontSize)",
                  fontWeight: 400,
                  color: "var(--textColor)",
                  mt: 3,
                  lineHeight: "28px",
                  //   maxWidth: "700px",
                }}
                ref={ref}
                className={`animate__animated ${
                  inView ? "animate__fadeInUp" : ""
                } animate__delay-.5s`}
              >
                Driven by a commitment to excellence, I am eager to collaborate
                on projects that demand creativity, technical finesse, and a
                user-centric approach.
              </Typography>
              <Button
                ref={ref}
                className={`animate__animated ${
                  inView ? "animate__fadeInUp" : ""
                } animate__delay-.5s`}
                variant="contained"
                sx={{ width: "200px", py: 1, mt: 8, textTransform: "none" }}
                onClick={() => setIsOpen(true)}
              >
                Let's Connect {<EastIcon sx={{ fontSize: "18px", ml: 1 }} />}
              </Button>
              <PopupModal
                url="https://calendly.com/geeksam"
                pageSettings={props.pageSettings}
                utm={props.utm}
                prefill={props.prefill}
                onModalClose={() => setIsOpen(false)}
                open={isOpen}
                rootElement={document.getElementById("root")}
              />
            </Grid>
            <Grid
              item
              xs={12}
              lg={6}
              md={6}
              order={{ xs: 3, sm: 3, lg: 3 }}
              sx={{
                display: { xs: "block", sm: "block", md: "block", lg: "none" },
              }}
            >
              <SocialLinks />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: { xs: 2, sm: 2, md: 2, lg: 10 }, px: { xs: 3, sm: 8 } }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} lg={12}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "var(--headingSize)",
                  fontWeight: 600,
                  color: "var(--headingColor)",
                  mt: 3,
                  lineHeight: "28px",
                }}
              >
                Experiences
              </Typography>
              <Box
                sx={{
                  mt: 4,
                }}
              >
                {experience.map((data, index) => (
                  <Experience
                    key={index}
                    companyName={data.companyName}
                    jobRoll={data.jobRoll}
                    duration={data.duration}
                    avatar={data.avatar}
                    description={data.description}
                  />
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} lg={12}>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "var(--headingSize)",
                    fontWeight: 600,
                    color: "var(--headingColor)",
                    mt: 3,
                    lineHeight: "28px",
                  }}
                >
                  Educations
                </Typography>
                <Box
                  sx={{
                    mt: 4,
                  }}
                >
                  {educations.map((data, index) => (
                    <Education
                      key={index}
                      courseName={data.courseName}
                      collegeName={data.collegeName}
                      duration={data.duration}
                      avatar={data.avatar}
                      description={data.description}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default About;
