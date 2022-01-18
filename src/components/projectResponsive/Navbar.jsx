import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#EEEEEE",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  navItem: {
    marginRight: 20,
    padding: 5,
    borderRadius: 5,
    color: "#085598",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: "white",
      color: "#3E50B3",
    },
  },
  active: {
    border: "1px solid white",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #085598",
    color: "#085598",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "20%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
  },
  inputSearch: {
    width: "100%",
    marginLeft: theme.spacing(1),
  },
  cancel: {
    right: "0",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    display: (props) => (props.open ? "none" : "flex"),
    alignItems: "center",
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          <Avatar src="https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg" />
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          Imo
        </Typography>

        <div>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? ` ${classes.navItem} ${classes.active}`
                : classes.navItem
            }
            to="/"
            exact="true"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? ` ${classes.navItem} ${classes.active}`
                : classes.navItem
            }
            to="/blogs"
          >
            Blog
          </NavLink>
        </div>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search ..." className={classes.inputSearch} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar
            alt="R Sharp"
            src="https://images.pexels.com/photos/10542808/pexels-photo-10542808.jpeg?cs=srgb&dl=pexels-beepin-10542808.jpg&fm=jpg"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
