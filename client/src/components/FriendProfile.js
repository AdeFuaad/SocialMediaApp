import { Box, Typography, useTheme } from "@mui/material";
import MessageFriend from "./MessageFriend";

const FriendProfile = ({ friend }) => {
  const { palette } = useTheme();

  return (
    <Box>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        {`${friend.firstName} ${friend.lastName}`}
      </Typography>
      <Box display="flex" flexDirection="column" gap="0.5rem">
        <Typography variant="subtitle1">{`Occupation: ${friend.occupation}`}</Typography>
        <Typography variant="subtitle1">{`Email: ${friend.email}`}</Typography>
        <Typography variant="subtitle1">{`Phone: ${friend.phone}`}</Typography>
      </Box>
      <MessageFriend friend={friend} />
    </Box>
  );
};

export default FriendProfile;
