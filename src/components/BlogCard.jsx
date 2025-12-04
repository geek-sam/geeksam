import { Box, Card, Stack, Typography } from "@mui/material";
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useInView } from "react-intersection-observer";

function BlogCard(props) {
  const { date, blogType, banner, isNew, heading, link } = props;

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger when 50% of the element is visible
  });

  return (
    <div>
      <Card
        ref={ref}
        className={`animate__animated ${
          inView ? "animate__fadeInUp" : ""
        } animate__delay-.5s card`}
        elevation={0}
        sx={{
          color: "var(--textColor)",
          display: "flex",
          gap: 1,
          bgcolor: "transparent",
          cursor: "pointer",
          flexDirection: "column",
          alignItems: "flex-start",
          filter: "grayscale(100%)",
          "&:hover": {
            filter: "grayscale(0%)",
            transform: "scale(1.08)",
          },
          "&:hover .heading": {
            color: "var(--headingColor)",
          },
          transition: "all 0.3s ease",
        }}
        onClick={() => window.open(link, "_blank")}
      >
        <Box>
          <Box
            component="img"
            src={banner ? banner : "/images/StreamingApp.jpg"}
            alt="image"
            sx={{
              width: "100%",
              height: 200,
              borderRadius: "8px",
              overflow: "hidden",
              flexShrink: 0,
              objectFit: "cover",
              transition: "filter 0.3s ease",
            }}
          />
        </Box>
        <Stack spacing={2} sx={{ position: "relative", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
              gap:2
            }}
          >
            {/* Date */}
            <Typography
              variant="body1"
              sx={{
                fontSize: "var(--fontSize)",
                fontWeight: 300,
                color: "var(--textColor)",
                // mt: 1,
              }}
            >
              {date}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "var(--fontSize)",
                fontWeight: 500,
                color: "var(--textColor)",
                mt: 1,
                bgcolor: "var(--cardBgColor)",
                padding: "4px 10px",
                borderRadius: "5px",
              }}
            >
              {blogType}
            </Typography>
            {isNew ? (
              <Typography
                variant="body1"
                sx={{
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "var(--brandColor)",
                  mt: 1,
                  // bgcolor: "var(--brandColor)",
                  padding: "4px 10px",
                  borderRadius: "5px",
                }}
              >
                Latest
              </Typography>
            ) : (
              ""
            )}
          </Box>
          {/* Heading */}
          <Typography
          className="heading"
            variant="body1"
            sx={{
              fontSize: "var(--heading2Size)",
              fontWeight: 600,
              color: "var(--textColor)",
              mt: 3,
            }}
          >
            {heading}
          </Typography>

          {/* Link (action button) */}
          {/* <Link
            href={link}
            to="route"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "var(--brandColor)",
              textDecoration: "none",
              display: "flex",
            }}
          >
            Read more <ArrowRightAltIcon sx={{ ml: 1 }} />
          </Link> */}
        </Stack>
      </Card>
    </div>
  );
}

export default BlogCard;
