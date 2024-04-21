import {
  Slide,
  Alert,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import customTheme from "../components/InputTheme";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MailIcon from "@mui/icons-material/Mail";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const outerTheme = useTheme();
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.subject || !formData.message) {
      setOpenSnackbar(true);
      setSnackbarSeverity("error");
      setSnackbarMessage("Please fill in all fields!");
      return;
    }

    emailjs
      .send("service_180", "template_180", formData, {
        publicKey: "KiabSO3vWPijpKjYR",
      })
      .then(
        (response) => {
          console.log("Email sent:", response.status, response.text);
          setFormData({
            email: "",
            subject: "",
            message: "",
          });
          setOpenSnackbar(true);
          setSnackbarSeverity("success");
          setSnackbarMessage("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setFormData({
            email: "",
            subject: "",
            message: "",
          });
          setOpenSnackbar(true);
          setSnackbarSeverity("error");
          setSnackbarMessage("Oops! Failed to send message.");
        }
      );
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Container>
        <Box sx={{ mt: 18, px: { xs: 2, sm: 8 } }}>
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
                  <a
                    href="https://www.linkedin.com/in/sambhav-sahoo"
                    target="/"
                  >
                    <LinkedInIcon
                      className="btnHover"
                      sx={{
                        mr: 3,
                        cursor: "pointer",
                        color: "var(--iconColor)",
                      }}
                    />
                  </a>
                  <a href="https://www.instagram.com/_sam_b_hav_" target="/">
                    <InstagramIcon
                      className="btnHover"
                      sx={{
                        mr: 3,
                        cursor: "pointer",
                        color: "var(--iconColor)",
                      }}
                    />
                  </a>
                  <a href="https://github.com/geek-sam" target="/">
                    <GitHubIcon
                      className="btnHover"
                      sx={{
                        mr: 3,
                        cursor: "pointer",
                        color: "var(--iconColor)",
                      }}
                    />
                  </a>
                  <a href="https://twitter.com/Im__Sam_" target="/">
                    <XIcon
                      className="btnHover"
                      sx={{
                        mr: 3,
                        cursor: "pointer",
                        color: "var(--iconColor)",
                      }}
                    />
                  </a>
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
                      width: { xs: "34ch", sm: "42ch", md: "50ch", lg: "52ch" },
                    },
                    display: "flex",
                    flexDirection: "column",
                  }}
                  noValidate
                  autoComplete="off"
                  onSubmit={sendEmail}
                >
                  <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      label="Email"
                      type="email"
                      variant="standard"
                      size="small"
                      name="email"
                      value={formData.email}
                      required
                      onChange={handleChange}
                    />
                    <TextField
                      label="Subject"
                      variant="standard"
                      size="small"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      required
                      onChange={handleChange}
                    />
                    <TextField
                      label="Enter your message"
                      variant="standard"
                      multiline
                      size="small"
                      name="message"
                      rows={3}
                      type="text"
                      value={formData.message}
                      required
                      onChange={handleChange}
                    />
                  </ThemeProvider>
                  <Button
                    variant="contained"
                    type="submit"
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
            <Snackbar
              open={openSnackbar}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              autoHideDuration={4000}
              TransitionComponent={Slide}
              transitionDuration={{ enter: 800, exit: 4000 }}
              TransitionProps={{ enter: true, exit: false }}
              onClose={handleCloseSnackbar}
              sx={{
                width: 300,
                color: "secondary",
                //backgroundColor: "green",
                // "& .MuiSnackbarContent-root": { backgroundColor: "green" },
              }}
            >
              <Alert severity={snackbarSeverity} sx={{ width: "100%" }}>
                {snackbarMessage}
              </Alert>
            </Snackbar>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default Contact;
