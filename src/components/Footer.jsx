import { Box, Container, Divider, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Container>
      <Divider sx={{ bgcolor: "var(--cardBgColor)", mt: 10 }} />
      <Box
        className="footer"
        sx={{
          mx: { xs: 8, lg: 8 },
          mt: 4,
          mb: 7,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: {
            sm: "space-around",
            xs: "space-between",
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
              ml: 4,
            },
          }}
        >
          <Link
            className="btnHover"
            sx={{ color: "var(--headingColor)", fontSize: "var(--fontSize)" }}
            href="/about"
            underline="none"
          >
            About
          </Link>
          <Link
            className="btnHover"
            sx={{ color: "var(--headingColor)", fontSize: "var(--fontSize)" }}
            href="/projects"
            underline="none"
          >
            Projects
          </Link>
          <Link
            className="btnHover"
            sx={{ color: "var(--headingColor)", fontSize: "var(--fontSize)" }}
            href="/blogs"
            underline="none"
          >
            Blogs
          </Link>
          <Link
            className="btnHover"
            sx={{ color: "var(--headingColor)", fontSize: "var(--fontSize)" }}
            href="/contact"
            underline="none"
          >
            Contact
          </Link>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "var(--textColor)", mt: 2, fontSize: "var(--fontSize)" }}
        >
          © 2023 <span style={{ color: "var(--brandColor)" }}>Geek-sam</span>.
          All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
