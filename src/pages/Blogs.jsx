import { Box, Container, Typography } from "@mui/material";

const Blogs = () => (
  <>
    <Container>
      <Box sx={{ mt: 18, px: { xs: 3, sm: 8 }, height: "50vh" }}>
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
          Will implement soon!
        </Typography>
        <Typography
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
          Hey there we are working on this, and this will come to you very soon.
        </Typography>
      </Box>
    </Container>
  </>
);

export default Blogs;
