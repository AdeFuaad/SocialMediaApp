import React from 'react';
import { Box, Typography } from '@mui/material';

const SocialProfile = ({ name, imageSrc, description, url }) => {
  return (
    <Box display="flex" alignItems="center" gap="1rem">
      <img src={imageSrc} alt={name} width="32" height="32" />
      <Box>
        <Typography fontWeight="500" mb="0.25rem">
          {name}
        </Typography>
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {description}
          </a>
        ) : (
          <Typography>{description}</Typography>
        )}
      </Box>
    </Box>
  );
};

export default SocialProfile;
