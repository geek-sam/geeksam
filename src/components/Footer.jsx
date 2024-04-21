import { Box, Container, Divider, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Divider sx={{ bgcolor: "var(--cardBgColor)", mt: 10 }} />
      <Box
        className="footer"
        sx={{
          mx: { xs: 4, lg: 8 },
          mt: 4,
          mb: 7,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: {
            sm: "space-around",
            xs: "center",
            md: "space-between",
            lg: "space-between",
          },
        }}
      >
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "spaceBetween",
            typography: "body1",
            "& > :not(style) ~ :not(style)": {
              ml: { xs: 2, sm: 2, md: 4, lg: 4 },
            },
          }}
        >
          <NavLink
            className="btnHover navLink"
            sx={{ color: "var(--headingColor)", fontSize: "var(--fontSize)" }}
            to="/about"
            underline="none"
          >
            About
          </NavLink>
          <NavLink
            className="btnHover navLink"
            sx={{ color: "var(--headingColor)", fontSize: "var(--fontSize)" }}
            to="/projects"
            underline="none"
          >
            Projects
          </NavLink>
          <NavLink
            className="btnHover navLink"
            sx={{ color: "var(--headingColor)", fontSize: "var(--fontSize)" }}
            to="/blogs"
            underline="none"
          >
            Blogs
          </NavLink>
          <NavLink
            className="btnHover navLink"
            sx={{ color: "var(--headingColor)", fontSize: "var(--fontSize)" }}
            to="/contact"
            underline="none"
          >
            Contact
          </NavLink>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "var(--textColor)", mt: 2, fontSize: "var(--fontSize)" }}
        >
          © 2024{" "}
          <span
            style={{ color: "var(--brandColor)", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            geek-sam
          </span>
          . All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
