import { Box, Container, Divider, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router";
// import { NavLink } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Behance02Icon,
  NewTwitterIcon,
  DribbbleIcon,
  Github01Icon,
  InstagramIcon,
  Linkedin01Icon,
} from "@hugeicons/core-free-icons";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Divider sx={{ bgcolor: "var(--cardBgColor)", mt: 10 }} />
      <Box className="footer" sx={{ mx: { xs: 4, lg: 8 } }}>
        <Typography
          variant="h2"
          sx={{
            mt:4,
            textAlign: "center",
            color: "var(--cardBgColor)",
            fontWeight: 700,
            textTransform:"uppercase",
            whiteSpace: "pre-line",
          }}
        >
          {`Let's connect`}
        </Typography>
        <Box
          sx={{
            mt: 3,
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
            className="animate__animated animate__fadeInUp animate__delay-.5s"
            sx={{ mt: 2, display: "flex", gap: 2 }}
          >
            <a href="https://www.linkedin.com/in/sambhav-sahoo" target="/">
              <HugeiconsIcon
                className="btnHover"
                icon={Linkedin01Icon}
                size={28}
                color="var(--iconColor)"
                strokeWidth={1.5}
              />
            </a>
            <a href="https://dribbble.com/ux-sam" target="/">
              <HugeiconsIcon
                className="btnHover"
                icon={DribbbleIcon}
                size={28}
                color="var(--iconColor)"
                strokeWidth={1.5}
              />
            </a>
            <a href="https://www.behance.net/sambhavsahoo" target="/">
              <HugeiconsIcon
                className="btnHover"
                icon={Behance02Icon}
                size={28}
                color="var(--iconColor)"
                strokeWidth={1.5}
              />
            </a>
            <a href="https://github.com/geek-sam" target="/">
              <HugeiconsIcon
                className="btnHover"
                icon={Github01Icon}
                size={28}
                color="var(--iconColor)"
                strokeWidth={1.5}
              />
            </a>
            <a href="https://www.instagram.com/_sam_b_hav_" target="/">
              <HugeiconsIcon
                className="btnHover"
                icon={InstagramIcon}
                size={28}
                color="var(--iconColor)"
                strokeWidth={1.5}
              />
            </a>
            <a href="https://twitter.com/ux_sam_" target="/">
              <HugeiconsIcon
                className="btnHover"
                icon={NewTwitterIcon}
                size={28}
                color="var(--iconColor)"
                strokeWidth={1.5}
              />
            </a>
          </Box>
          {/* <Box
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
        </Box> */}
          <Typography
            variant="body1"
            sx={{
              color: "var(--textColor)",
              mt: 2,
              fontSize: "var(--fontSize)",
            }}
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
      </Box>
    </Container>
  );
};

export default Footer;
