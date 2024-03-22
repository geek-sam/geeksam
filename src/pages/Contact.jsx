import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import customTheme from "../components/InputTheme";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MailIcon from "@mui/icons-material/Mail";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const outerTheme = useTheme();
  // const [ref, inView] = useInView({
  //   triggerOnce: true, // Only trigger once
  //   threshold: 0.1, // Trigger when 50% of the element is visible
  // });
  return (
    <>
      <Container>
        <Box sx={{ mt: 18, px: { xs: 3, sm: 8 } }}>
          <Typography
            className="animate__animated animate__fadeInUp animate__delay-.5s"
            variant="h1"
            sx={{
              fontSize: "var(--heroSize)",
              fontWeight: 700,
              color: "var(--headingColor)",
              mt: 4,
              maxWidth: "700px",
            }}
          >
            Get in touch
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
            Feel free to reach out for collaborations, inquiries, or just to say
            hello! Your messages are always welcome and appreciated.
          </Typography>
          <Box sx={{ mt: 7 }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{}}
            >
              <Grid item xs={12} lg={6}>
                <Typography
                  className="animate__animated animate__fadeInUp animate__delay-.5s"
                  variant="h2"
                  sx={{
                    fontSize: "var(--headingSize)",
                    fontWeight: 700,
                    color: "var(--headingColor)",
                  }}
                >
                  Contact Information
                </Typography>
                <Box
                  className="animate__animated animate__fadeInUp animate__delay-.5s"
                  sx={{ mt: 4, mb: 2 }}
                >
                  <List sx={{ mt: -2 }}>
                    <ListItem>
                      <LocationCityIcon
                        sx={{ mr: 3, color: "var(--iconColor)" }}
                      />
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              fontWeight: 500,
                              fontSize: "var(--fontSize)",
                              color: "var(--headingColor)",
                            }}
                          >
                            Patia, Bhubaneswar, Odisha
                          </Typography>
                        }
                      />
                    </ListItem>
                  </List>
                  <List sx={{ mt: -2 }}>
                    <ListItem>
                      <MailIcon
                        sx={{
                          mr: 3,
                          color: "var(--iconColor)",
                        }}
                      />
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              fontWeight: 500,
                              fontSize: "var(--fontSize)",
                              color: "var(--headingColor)",
                            }}
                          >
                            sambhavsahoo180@gmail.com
                          </Typography>
                        }
                      />
                    </ListItem>
                  </List>
                  <List sx={{ mt: -2 }}>
                    <ListItem>
                      <PhoneIcon sx={{ mr: 3, color: "var(--iconColor)" }} />
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              fontWeight: 500,
                              fontSize: "var(--fontSize)",
                              color: "var(--headingColor)",
                            }}
                          >
                            +91 7008666231
                          </Typography>
                        }
                      />
                    </ListItem>
                  </List>
                  <List sx={{ mt: -2 }}>
                    <ListItem>
                      <CheckCircleIcon
                        sx={{ mr: 3, color: "var(--iconColor)" }}
                      />
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              fontWeight: 500,
                              fontSize: "var(--fontSize)",
                              color: "var(--headingColor)",
                            }}
                          >
                            Freelance Available
                          </Typography>
                        }
                      />
                    </ListItem>
                  </List>
                </Box>
                <Divider sx={{ bgcolor: "var(--cardBgColor)" }} />
                <Box
                  className="animate__animated animate__fadeInUp animate__delay-.5s"
                  sx={{ mt: 2, mb: 4 }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: "var(--headingSize)",
                      fontWeight: 700,
                      color: "var(--headingColor)",
                      mb: 2,
                    }}
                  >
                    Follow me
                  </Typography>
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
              </Grid>
              <Grid item xs={12} lg={6}>
                <Typography
                  className="animate__animated animate__fadeInUp animate__delay-.5s"
                  variant="h2"
                  sx={{
                    fontSize: "var(--headingSize)",
                    fontWeight: 700,
                    color: "var(--headingColor)",
                    mb: 3,
                  }}
                >
                  Share your thoughts...
                </Typography>
                <Box
                  className="animate__animated animate__fadeInUp animate__delay-.5s"
                  component="form"
                  sx={{
                    "& > :not(style)": {
                      m: 0.5,
                      width: { xs: "44ch", sm: "48ch", md: "50ch", lg: "52ch" },
                    },
                    display: "flex",
                    flexDirection: "column",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      label="Email"
                      type="email"
                      variant="standard"
                      size="small"
                    />
                    <TextField
                      label="Subject"
                      variant="standard"
                      size="small"
                    />
                    <TextField
                      label="Enter your message"
                      variant="standard"
                      multiline
                      size="small"
                      rows={3}
                    />
                  </ThemeProvider>
                  <Button
                    variant="contained"
                    style={{
                      marginTop: "40px",
                      width: "150px",
                      padding: 8,
                      color: "#fff",
                      background: "var(--brandColor)",
                    }}
                  >
                    Send message
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default Contact;
