import { Grid, Typography } from "@material-ui/core";
import { Facebook, Home, Instagram } from "@material-ui/icons";
import React from "react";
import "./footer.scss";

export const Footer = () => {
  return (
    <>
      <Grid container justifyContent="space-around" className="footer">
        <Grid item sm={3} className="item">
          <Typography variant="h6">contact info</Typography>
          <Typography>
            Contact Info Lorem Ipsum is simply dummy text of the printing and
            typesetting has been the industry's.
          </Typography>
          <Typography>
            <Home />
            39 Nguyen Minh Anh, Dist. Hai Chau, Da Nang City
          </Typography>
          <Typography>
            <Facebook />
            Facebook: fb.com/ino
          </Typography>
          <Typography>
            <Instagram />
            Instagram: instagram.com/ino1
          </Typography>
        </Grid>
        <Grid item sm={3} className="item">
          <Typography variant="h6">Categories</Typography>
          <Typography>Fashion</Typography>
          <Typography>Foods</Typography>
          <Typography>Travels</Typography>
        </Grid>
        <Grid item sm={3} className="item">
          <Typography variant="h6">popular posts</Typography>
          <Typography>Contact Info Lorem Ipsum</Typography>
          <Typography>Contact Info Lorem Ipsum</Typography>
          <Typography>Contact Info Lorem Ipsum</Typography>
        </Grid>
      </Grid>
    </>
  );
};
