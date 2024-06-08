import { Box, Container, Divider, Typography } from "@mui/material";
import { blogs } from "../../config";
import BlogCard from "../components/BlogCard";

const Blogs = () => (
  <>
    <Container>
      <Box sx={{ mt: 18, px: { xs: 3, sm: 8 } }}>
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
          Insights & Ideas
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "var(--subHeadingSize)",
            fontWeight: 400,
            color: "var(--textColor)",
            mt: 1,
            lineHeight: "28px",
            maxWidth: "700px",
          }}
        >
          Explore my Latest Articles and Thoughts.
        </Typography>
        <Divider sx={{ mt: 5, bgcolor: "var(--cardBgColor)" }} />
        {!blogs ? (
          "No blogs Found"
        ) : (
          <>
            {blogs.map((data, index) => (
              <BlogCard
                key={index}
                date={data.date}
                blogType={data.blogType}
                isNew={data.isNew}
                heading={data.heading}
                subHeading={data.subHeading}
                link={data.link}
              />
            ))}
          </>
        )}
      </Box>
    </Container>
  </>
);

export default Blogs;
