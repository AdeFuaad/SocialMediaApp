import React from 'react';
import { Box, Typography } from '@mui/material';

const DirectMessage = ({ friend }) => {
  return (
    <Box>
      <Typography variant="h6">Direct Message</Typography>
      <Typography>
        You have selected {friend.firstName} {friend.lastName} to send a direct message.
      </Typography>
    </Box>
  );
};

export default DirectMessage;
