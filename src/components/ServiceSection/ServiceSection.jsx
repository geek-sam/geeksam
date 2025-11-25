import { Box, Grid, Typography } from "@mui/material";
import ServiceList from "./ServiceList";
import { servicesData } from "../../../config";
// const images = import.meta.glob("/public/images/Logos/*.{png,jpg,jpeg,svg}", {
//   eager: true,
// });

function ServiceSection() {
  // const imageList = Object.values(images).map((img) => img.default);
  const imageList = [
    { name: "Figma", url: "Figma.png" },
    { name: "Photoshop", url: "Photoshop.png" },
    { name: "Illustrator", url: "Illustrator.png" },
    { name: "Xdesign", url: "Xdesign.png" },
    { name: "Miro", url: "Mirro.png" },
    { name: "Framer", url: "Framer.png" },
    { name: "Webflow", url: "Webflow.png" },
    { name: "React", url: "React.png" },
    { name: "Tailwind", url: "Tailwind.png" },
    { name: "JavaScript", url: "JavaScript.png" },
    { name: "CSS", url: "CSS.png" },
    { name: "HTML", url: "HTML.png" },
    { name: "Clickup", url: "Clickup.png" },
    { name: "Notion", url: "Notion.png" },
    { name: "Trello", url: "Trello.png" },
    { name: "Slack", url: "Slack.png" },
  ]; 
  return (
    <Box sx={{ py: 4 }}>
      {/* Featuring Projects Section */}

      <Grid container spacing={12} sx={{ mt: 3 }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontSize: "var(--headingSize)",
              fontWeight: 600,
              color: "var(--headingColor)",
              maxWidth: "700px",
              lineHeight: "48px",
            }}
            className="animate__animated animate__fadeInDown animate__delay-.5s"
          >
            <span style={{ color: "var(--iconColor)" }}>Perfect Fit</span>
            <br />
            For Your Design and <br />
            Innovation.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontSize: "var(--subHeadingSize)",
              fontWeight: 400,
              color: "var(--textColor)",
              lineHeight: "24px",
              mt: 4,
              maxWidth: "600px",
            }}
            className="animate__animated animate__fadeInDown animate__delay-.5s"
          >
            {/* Here is a glimpse of some of my recent and exciting projects. */}
            My tech Stacks
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 2,
              mt: 3,
            }}
          >
            {imageList.map((src, index) => (
              <img
                key={index}
                src={`/public/images/Logos/${src.url}`}
                height={56}
                alt={src.name}
                title={src.name}
                className="animate__animated animate__fadeInDown animate__delay-.5s"
                style={{boxShadow: "0px 5px 15px rgba(85, 123, 226, 0.22)", borderRadius: "8px"}}
              />
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          {servicesData.map((service, index) => (
            <ServiceList
              key={index}
              iconName={service.iconName}
              serviceName={service.serviceName}
              serviceDesc={service.serviceDesc}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default ServiceSection;
