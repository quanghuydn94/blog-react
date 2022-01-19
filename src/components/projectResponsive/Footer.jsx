import { Avatar, Box, Grid, Typography } from "@material-ui/core";
import { Facebook, Home, HomeOutlined, Instagram } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

export const Footer = () => {
  return (
    <>
      <Grid container justifyContent="space-around" className="footer">
        <Grid item sm={5} xs={12} className="item">
          <Box className="logoFooter">
            <Avatar src="https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg" />
          </Box>
          <Typography className="iconHover">
            <HomeOutlined />
            39 Nguyen Minh Anh, Dist. Hai Chau, Da Nang City
          </Typography>
          <Typography className="iconHover">
            <Facebook />
            Facebook: fb.com/ino
          </Typography>
          <Typography className="iconHover">
            <Instagram />
            Instagram: instagram.com/ino1
          </Typography>
        </Grid>
        <Grid item sm={5} xs={12} className="item ">
          <Typography className="category">
            <Link to="/blogs">Fashion</Link>
          </Typography>
          <Typography className="category">
            <Link to="/blogs">Foods </Link>
          </Typography>
          <Typography className="category">
            <Link to="/blogs">Travels</Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
