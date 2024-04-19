import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  List,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import avatar from "../../public/images/avatar.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import OfferingCard from "../components/OfferingCard";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import customTheme from "../components/InputTheme";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import WorkListItem from "../components/WorkListItem";
import SouthIcon from "@mui/icons-material/South";
import { works, offerings } from "../../config";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const outerTheme = useTheme();

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger when 50% of the element is visible
  });
  return (
    <Container>
      <Box sx={{ mt: 18, px: { xs: 3, sm: 8 } }}>
        <Avatar
          alt="Sam"
          src={avatar}
          sx={{ width: 72, height: 72, bgcolor: "var(--brandColor)" }}
          className="animate__animated animate__fadeInDown animate__delay-.5s"
        />
        <Typography
          variant="h1"
          sx={{
            fontSize: "var(--heroSize)",
            fontWeight: 700,
            color: "var(--headingColor)",
            mt: 4,
            maxWidth: "700px",
          }}
          className="animate__animated animate__fadeInDown animate__delay-.5s"
        >
          Software developer and UI/UX designer.
        </Typography>
        <Typography
          className="animate__animated animate__fadeInUp animate__delay-.5s"
          variant="body1"
          sx={{
            fontSize: "var(--fontSize)",
            fontWeight: 400,
            color: "var(--textColor)",
            mt: 3,
            lineHeight: "28px",
            maxWidth: "700px",
          }}
        >
          I’m Sam, a passionate Frontend Developer and UI/UX Designer with HTML,
          CSS, JavaScript, Bootstrap, and ReactJS expertise. Proficient in UI/UX
          design using Figma, and Adobe tools like Photoshop, Illustrator, and
          XD. Aiming to create visually stunning and functionally efficient web
          solutions prioritizing user experience.
        </Typography>
        <Box
          className="animate__animated animate__fadeInUp animate__delay-.5s"
          sx={{ mt: 3 }}
        >
          <LinkedInIcon
            className="btnHover"
            sx={{ mr: 3, cursor: "pointer", color: "var(--iconColor)" }}
          />
          <InstagramIcon
            className="btnHover"
            sx={{ mr: 3, cursor: "pointer", color: "var(--iconColor)" }}
          />
          <GitHubIcon
            className="btnHover"
            sx={{ mr: 3, cursor: "pointer", color: "var(--iconColor)" }}
          />
          <TwitterIcon
            className="btnHover"
            sx={{ mr: 3, cursor: "pointer", color: "var(--iconColor)" }}
          />
        </Box>
        <Button
          className="animate__animated animate__fadeInUp animate__delay-.5s"
          variant="contained"
          sx={{ width: "200px", py: 1, mt: 8, textTransform: "none" }}
        >
          Downlaod CV {<SouthIcon sx={{ fontSize: "18px", ml: 1 }} />}
        </Button>
        <Box sx={{ mt: 14 }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              mt: 4,
            }}
          >
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "var(--headingSize)",
                  fontWeight: 600,
                  color: "var(--headingColor)",
                  mt: 3,
                  lineHeight: "38px",
                  m: "auto",
                  maxWidth: "600px",
                }}
              >
                What I Do
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "var(--fontSize)",
                  fontWeight: 400,
                  color: "var(--textColor)",
                  mt: 3,
                  lineHeight: "38px",
                  m: "auto",
                  mb: 2,
                  maxWidth: "600px",
                }}
              >
                I elevate projects with innovative solutions in
              </Typography>
              {offerings.map((data, index) => (
                <OfferingCard
                  key={index}
                  icon={data.icon}
                  heading={data.heading}
                  desc={data.desc}
                />
              ))}
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Paper
                ref={ref}
                className={`card animate__animated ${
                  inView ? "animate__fadeInUp" : ""
                } animate__delay-.2s`}
                elevation={0}
                sx={{
                  border: "2px solid var(--cardBgColor)",
                  background: "none",
                  p: 3,
                  mt: { xs: 3, sm: 3, md: 1, lg: 12 },
                  ml: { xs: 0, sm: 1, md: 1, lg: 5 },
                  borderRadius: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    color: "var(--headingColor)",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <MailOutlineIcon sx={{ mr: 3, color: "var(--iconColor)" }} />
                  Stay up to date...
                </Typography>
                <Typography
                  sx={{
                    color: "var(--textColor)",
                    mt: 2,
                    fontSize: "var(--fontSize)",
                  }}
                >
                  Get notified when I publish new blogs, and unsubscribe at any
                  time.
                </Typography>
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField
                    size="small"
                    placeholder="Email address"
                    type="email"
                    variant="outlined"
                    sx={{
                      width: { xs: "70%", sm: "80%", md: "70%", lg: "80%" },
                      mt: 2,
                    }}
                  />
                </ThemeProvider>
                <Button
                  variant="contained"
                  sx={{
                    pb: 1.2,
                    textTransform: "none",
                    bgcolor: "var(--iconColor)",
                    ml: 1,
                    mt: 2,
                  }}
                >
                  Join
                </Button>
              </Paper>
              <Paper
                elevation={0}
                ref={ref}
                className={`card animate__animated ${
                  inView ? "animate__fadeInUp" : ""
                } animate__delay-.5s`}
                sx={{
                  border: "2px solid var(--cardBgColor)",
                  background: "none",
                  p: 3,
                  mt: 5,
                  ml: { xs: 0, sm: 1, md: 1, lg: 5 },
                  borderRadius: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    color: "var(--headingColor)",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <WorkOutlineIcon sx={{ mr: 3, color: "var(--iconColor)" }} />
                  Work
                </Typography>
                <List
                  sx={{
                    width: "100%",
                  }}
                >
                  {works.map((data, index) => (
                    <WorkListItem
                      key={index}
                      companyName={data.companyName}
                      jobRoll={data.jobRoll}
                      duration={data.duration}
                      avatar={data.avatar}
                    />
                  ))}
                </List>

                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    bgcolor: "var(--cardBgColor)",
                    m: "auto",
                    mt: 2,
                    width: "100%",
                    color: "var(--headingColor)",
                    borderColor: "var(--cardBgColor)",
                    fontSize: "var(--fontSize)",
                    fontWeight: 400,
                  }}
                >
                  Download CV {<SouthIcon sx={{ fontSize: "18px", ml: 1 }} />}
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
