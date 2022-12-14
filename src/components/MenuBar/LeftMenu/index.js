import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserEmail } from "../../../redux/user/selectors";

export const LeftMenu = ({ open, onClose }) => {
  const navigate = useNavigate();
  const email = useSelector(getUserEmail);
  const onMainPage = () => navigate("/monefy");
  const onDiagram = () => navigate("/diagram");
  const onRibbon = () => navigate("/ribbon");
  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem key={"Mail"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailOutlineIcon color="action" fontSize="medium" />
            </ListItemIcon>
            <ListItemText primary={`${email}`} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key={"Main"} disablePadding>
          <ListItemButton onClick={onMainPage}>
            <ListItemIcon>
              <HomeOutlinedIcon color="action" />
            </ListItemIcon>
            <ListItemText primary={"Main"} fontSize="medium" />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Diagram"} disablePadding>
          <ListItemButton onClick={onDiagram}>
            <ListItemIcon>
              <QueryStatsIcon color="action" fontSize="medium" />
            </ListItemIcon>
            <ListItemText primary={"Diagram"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Ribbon"} disablePadding>
          <ListItemButton onClick={onRibbon}>
            <ListItemIcon>
              <CategoryOutlinedIcon color="action" fontSize="medium" />
            </ListItemIcon>
            <ListItemText primary={"Ribbon"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Drawer anchor={"left"} open={open} onClose={onClose}>
      {list()}
    </Drawer>
  );
};
