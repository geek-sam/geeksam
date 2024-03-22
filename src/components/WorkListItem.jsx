import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

const WorkListItem = (props) => {
  const { companyName, jobRoll, duration, avatar } = props;
  return (
    <ListItem sx={{ py: 1, px: 0 }}>
      <ListItemAvatar sx={{ minWidth: "54px" }}>
        <Avatar
          alt={companyName}
          src={avatar}
          sx={{
            width: 40,
            height: 40,
            border: "4px solid var(--cardBgColor)",
            bgcolor: "var(--cardBgColor)",
            fontSize: "14px",
            mr: 0,
          }}
        />
      </ListItemAvatar>
      <ListItemText
        sx={{ ml: 0 }}
        primary={
          <Typography
            sx={{
              fontSize: "var(--fontSize)",
              color: "var(--headingColor)",
            }}
          >
            {companyName}
          </Typography>
        }
        secondary={
          <Typography
            sx={{
              fontSize: "var(--fontSize)",
              color: "var(--textColor)",
            }}
          >
            {jobRoll}
          </Typography>
        }
      />
      <ListItemText
        secondary={
          <Typography
            sx={{
              fontSize: "var(--fontSize)",
              color: "var(--textColor)",
            }}
          >
            {duration}
          </Typography>
        }
        sx={{
          top: "32px",
          position: "absolute",
          right: "10px",
        }}
      />
    </ListItem>
  );
};

export default WorkListItem;
