import { Box, Link, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function BlogCard(props) {
  const { date, blogType, heading, subHeading, link } = props;
  function truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
  }
  return (
    <div>
      <Box sx={{ mt: 5, maxWidth: "700px" }}>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}
        >
          {/* Date */}
          <Typography
            variant="body1"
            sx={{
              fontSize: "var(--fontSize)",
              fontWeight: 300,
              color: "var(--textColor)",
              mt: 1,
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
              ml: 4,
              bgcolor: "var(--cardBgColor)",
              padding: "4px 10px",
              borderRadius: "5px",
            }}
          >
            {blogType}
          </Typography>
        </Box>
        {/* Heading */}
        <Typography
          variant="body1"
          sx={{
            fontSize: "var(--subHeadingSize)",
            fontWeight: 600,
            color: "var(--headingColor)",
            mt: 3,
          }}
        >
          {heading}
        </Typography>
        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            fontSize: "var(--subHeadingSize)",
            fontWeight: 400,
            color: "var(--textColor)",
            mt: 2,
            mb: 2,
          }}
        >
          {truncate(subHeading, 200)}
          {/* {subHeading} */}
        </Typography>

        {/* Link (action button) */}
        <Link
          href={link}
          sx={{
            color: "var(--brandColor)",
            textDecoration: "none",
            display: "flex",
          }}
        >
          Read more <ArrowRightAltIcon sx={{ ml: 1 }} />
        </Link>
      </Box>
    </div>
  );
}

export default BlogCard;
