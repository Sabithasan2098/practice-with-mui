import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import birthDayCake from "./image/birthday_cake.jpeg";

const HeroSection = () => {
  return (
    <Grid container alignItems={"center"}>
      <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
        <Typography variant="h3" color="inherit">
          Food stall
        </Typography>
        <Typography variant="h5" color="inherit">
          We offer testy cakes and sweets for you
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ borderRadius: 6, fontSize: 20 }}
        >
          Call us
        </Button>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={6}
        justifyContent={"center"}
        order={{ xs: 1, sm: 2 }}
      >
        <Box component="img" src={birthDayCake}></Box>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
