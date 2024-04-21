import {
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import MailIcon from "@mui/icons-material/Mail";

const SocialLinks = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <List sx={{ mt: -2 }}>
        <ListItem>
          <LinkedInIcon sx={{ mr: 3, color: "var(--iconColor)" }} />
          <ListItemText
            primary={
              <Typography
                sx={{ fontWeight: 500, color: "var(--headingColor)" }}
              >
                Follow{" "}
                <Link
                  href="https://www.linkedin.com/in/sambhav-sahoo"
                  target="_blank"
                  sx={{
                    textDecoration: "none",
                    color: "var(--textColor)",
                    "&:hover": { color: "var(--brandColor)" },
                  }}
                >
                  @sambhav-sahoo
                </Link>
              </Typography>
            }
          />
        </ListItem>
      </List>
      <List sx={{ mt: -2 }}>
        <ListItem>
          <InstagramIcon sx={{ mr: 3, color: "var(--iconColor)" }} />
          <ListItemText
            primary={
              <Typography
                sx={{ fontWeight: 500, color: "var(--headingColor)" }}
              >
                Follow{" "}
                <Link
                  href="https://www.instagram.com/_sam_b_hav_"
                  target="_blank"
                  sx={{
                    textDecoration: "none",
                    color: "var(--textColor)",
                    "&:hover": { color: "var(--brandColor)" },
                  }}
                >
                  @_sam_b_hav_
                </Link>
              </Typography>
            }
          />
        </ListItem>
      </List>
      <List sx={{ mt: -2 }}>
        <ListItem>
          <GitHubIcon sx={{ mr: 3, color: "var(--iconColor)" }} />
          <ListItemText
            primary={
              <Typography
                sx={{ fontWeight: 500, color: "var(--headingColor)" }}
              >
                Follow{" "}
                <Link
                  href="https://github.com/geek-sam"
                  target="_blank"
                  sx={{
                    textDecoration: "none",
                    color: "var(--textColor)",
                    "&:hover": { color: "var(--brandColor)" },
                  }}
                >
                  @geek-sam
                </Link>
              </Typography>
            }
          />
        </ListItem>
      </List>
      <List sx={{ mt: -2 }}>
        <ListItem>
          <XIcon sx={{ mr: 3, color: "var(--iconColor)" }} />
          <ListItemText
            primary={
              <Typography
                sx={{ fontWeight: 500, color: "var(--headingColor)" }}
              >
                Follow{" "}
                <Link
                  href="https://twitter.com/Im__Sam_"
                  target="_blank"
                  sx={{
                    textDecoration: "none",
                    color: "var(--textColor)",
                    "&:hover": { color: "var(--brandColor)" },
                  }}
                >
                  @Im__Sam_
                </Link>
              </Typography>
            }
          />
        </ListItem>
      </List>
      <Divider sx={{ bgcolor: "var(--cardBgColor)" }} />
      <List sx={{ mt: 1 }}>
        <ListItem>
          <MailIcon sx={{ mr: 3, color: "var(--iconColor)" }} />
          <ListItemText
            primary={
              <Typography
                sx={{ fontWeight: 500, color: "var(--headingColor)" }}
              >
                sambhavsahoo180@gmail.com
              </Typography>
            }
          />
        </ListItem>
      </List>
    </div>
  );
};

export default SocialLinks;
