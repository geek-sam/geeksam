import { Box, Link, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function BlogCard(props) {
  const { date, blogType, isNew, heading, subHeading, link } = props;
  function truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
  }
  return (
    <div>
      <Box sx={{ mt: 5, maxWidth: "700px", px: 5, py: 2 }} className="card">
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
              ml: 4,
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
                ml: 1,
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
        </Link>
      </Box>
    </div>
  );
}

export default BlogCard;
