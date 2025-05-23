import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";

import user1 from "../../../assets/images/backgrounds/u2.jpg";
import user2 from "../../../assets/images/backgrounds/u3.jpg";
import user3 from "../../../assets/images/backgrounds/u4.jpg";

const blogs = [
  {
    img: user1,
    title: "¡Asombroso! Esta página pronto estará terminada.",
    subtitle:
    "lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, quos.",
    btncolor: "error",
  },
  {
    img: user2,
    title: "Universidad La Salle Oaxaca | Proyectos estudiantiles",
    subtitle:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, quos.",
    btncolor: "warning",
  },
  {
    img: user3,
    title: "¿Has pensado en tu seguro de vida? checa este artículo.",
    subtitle:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, quos.",
    btncolor: "primary",
  },
];

const BlogCard = () => {
  return (
    <Grid container>
      {blogs.map((blog, index) => (
        <Grid
          key={index}
          item
          xs={12}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              p: 0,
              width: "100%",
            }}
          >
            <img src={blog.img} alt="img" width="100%" />
            <CardContent
              sx={{
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "h4.fontSize",
                  fontWeight: "500",
                }}
              >
                {blog.title}
              </Typography>
              <Typography
                color="textSecondary"
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  mt: 1,
                }}
              >
                {blog.subtitle}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: "15px",
                }}
                color={blog.btncolor}
              >
                Más
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogCard;
