import React from "react";
import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider, IconButton, TextField, useTheme } from "@mui/material";

import UserImage from "../../components/UserImage";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SocialProfile from '../../components/SocialProfile';


const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false); // Make sure this line is present
  const { palette } = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;
const [twitterLink, setTwitterLink] = useState("");
const [linkedinLink, setLinkedinLink] = useState("");
const [instagramLink, setInstagramLink] = useState("");
const [facebookLink, setFacebookLink] = useState("");

const handleLinkChange = (e, setter) => {
  setter(e.target.value);
};

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleEditMode = () => { // Make sure this line is present
    setEditMode(!editMode);
  };

  if (!user) {
    return null;
  }

  const { firstName, lastName, location, occupation, friends } = user;

  return (
    // Rest of the code remains the same
    <WidgetWrapper>
      {/* FIRST ROW */}
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBetween gap="1rem">
          <UserImage image={picturePath} />
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              {firstName} {lastName}
            </Typography>
            <Typography color={medium}>{friends.length} friends</Typography>
          </Box>
        </FlexBetween>
        <ManageAccountsOutlined />
      </FlexBetween>

      <Divider />

      {/* SECOND ROW */}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{location}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{occupation}</Typography>
        </Box>
      </Box>

      <Divider />

      <Divider />
{/* FOURTH ROW */}
<Box p="1rem 0">
        <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
          Social Profiles
        </Typography>

        {editMode ? (
          <Box>
            <TextField
              label="Twitter"
              value={twitterLink}
              onChange={(e) => handleLinkChange(e, setTwitterLink)}
              fullWidth
              margin="dense"
            />
            <TextField
              label="LinkedIn"
              value={linkedinLink}
              onChange={(e) => handleLinkChange(e, setLinkedinLink)}
              fullWidth
              margin="dense"
            />
            <TextField
              label="instagram"
              value={instagramLink}
              onChange={(e) => handleLinkChange(e, setInstagramLink)}
              fullWidth
              margin="dense"
            />
            <TextField
              label="facebook"
              value={facebookLink}
              onChange={(e) => handleLinkChange(e, setFacebookLink)}
              fullWidth
              margin="dense"
            />
          </Box>
        ) : (
          <>
  <SocialProfile
    name="twitter"
    url={twitterLink}
    imageSrc="../assets/pngimg.com - twitter_PNG9.png"
    description="Social Network"
  />
  <SocialProfile
    name="LinkedIn"
    url={linkedinLink}
    imageSrc="../assets/pngimg.com - linkedIn_PNG6.png"
    description="Social Network"
  />
    <SocialProfile
    name="instagram"
    url={instagramLink}
    imageSrc="../assets/pngimg.com - instagram_PNG11.png"
    description="Social Network"
  />
  <SocialProfile
    name="facebook"
    url={facebookLink}
    imageSrc="../assets/pngimg.com - facebook_logos_PNG19757.png"
    description="Social Network"

  />
</>
        )}
      </Box>

      <IconButton onClick={toggleEditMode}>
        <EditOutlined />
      </IconButton>
    </WidgetWrapper>
  );
};

export default UserWidget;
