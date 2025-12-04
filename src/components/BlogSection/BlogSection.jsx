import { Box, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import { blogs } from "../../../config";
import BlogCard from "../BlogCard";

function BlogSection() {
  return (
    <Container sx={{ position: "relative", mt:8 }}>
      <Box sx={{ py: 4 }}>
        {/* Featuring Projects Section */}
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontSize: "var(--headingSize)",
            fontWeight: 600,
            color: "var(--headingColor)",
            mt: 4,
            maxWidth: "700px",
            lineHeight: "48px",
          }}
          className="animate__animated animate__fadeInDown animate__delay-.5s"
        >
          My Articles
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            fontSize: "var(--subHeadingSize)",
            fontWeight: 400,
            color: "var(--textColor)",
            lineHeight: "24px",
            maxWidth: "600px",
          }}
          className="animate__animated animate__fadeInDown animate__delay-.5s"
        >
          {/* Here is a glimpse of some of my recent and exciting projects. */}
          Here are some of my favorite projects that highlight my approach to
          solving real-world problems through design and development.
        </Typography>
        <Grid container spacing={5} sx={{ mt: 2 }}>
          {blogs.map((data, index) => {
            if (index < 3) {
              return (
                <Grid item xs={12} sm={12} md={4} lg={4} key={index}>
                  <BlogCard
                    key={index}
                    date={data.date}
                    blogType={data.blogType}
                    isNew={data.isNew}
                    heading={data.heading}
                    subHeading={data.subHeading}
                    link={data.link}
                  />
                  {/* {index < 2 && <Divider sx={{background:"var(--cardBgColor)"}}/>} */}
                </Grid>
              );
            }
          })}
        </Grid>
      </Box>
    </Container>
  );
}

export default BlogSection;
