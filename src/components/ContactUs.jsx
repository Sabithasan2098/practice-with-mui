import {
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <Typography variant="h4" my={6}>
        Contact Us-
      </Typography>
      <FormControl fullWidth sx={{ mb: 6 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
        <Button sx={{ py: 1 }} variant="contained" color="primary">
          Submit
        </Button>
      </FormControl>
    </>
  );
};

export default ContactUs;
