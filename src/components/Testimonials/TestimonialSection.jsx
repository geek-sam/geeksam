import { Box, Card, Typography, Avatar } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Chandini Menda",
    role: "Co-Founder, FOXO",
    text: "This service exceeded my expectations. The UI design and attention to detail were exceptional!",
    avatar:  "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Sangram Pani",
    role: "Design Lead, VITA Network",
    text: "Delivered fast, clean, and scalable code. Definitely working with you again!",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Mukti Prasad ",
    role: "Marketing Lead",
    text: "Professional, creative, and communicative throughout the whole project. Highly recommended!",
    avatar: "https://i.pravatar.cc/100?img=8",
  },
];

function TestimonialSection() {
  return (
    <Box sx={{ mx: "auto", py: 6}}>
      <Typography variant="h2"
            gutterBottom
            sx={{
              fontSize: "var(--headingSize)",
              fontWeight: 600,
              color: "var(--headingColor)",
              maxWidth: "700px",
              lineHeight: "48px",
            }}
            className="animate__animated animate__fadeInDown animate__delay-.5s">
                    Testimonials
                  </Typography>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        style={{ paddingBottom: "40px" }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <Card
              elevation={0}
              sx={{
                maxWidth:"700px",
                margin: "auto",
                p: 4,
                textAlign: "center",
                bgcolor: "transparent",
                color: "var(--textColor)",
              }}
            >
              <Box sx={{display:"flex",  justifyContent:"flex-start", alignItems:"center", mb: 2}}>
                <Avatar
                  src={item.avatar}
                  sx={{ width: 48, height: 48, mr:2,  mb: 2 }}
                />
                <Box sx={{display:"flex", flexDirection:"column", textAlign:"left"}}>
                  <Typography variant="h6" fontWeight={700}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {item.role}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="h5" sx={{ fontStyle: "italic", textAlign: "left" }}>
                “{item.text}”
              </Typography>
              
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default TestimonialSection;
