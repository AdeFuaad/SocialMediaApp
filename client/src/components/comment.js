import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, useTheme } from '@mui/material';
import FlexBetween from './FlexBetween';
import { setPost } from 'state';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

function Comment({ userId, comment, postId }) {
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const main = palette.neutral.main;

  const getCommentUser = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/${userId}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getCommentUser();
  }, [comment, userId, token]);

  const handleDeleteComment = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/posts/${postId}/comments/${comment._id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.ok) {
      dispatch(setPost(postId));
    } else {
      console.error(`Failed to delete comment ${comment._id} for post ${postId}`);
    }
  };

  return (
    <FlexBetween>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>

        <Box>
          
          <Typography sx={{ color: main, m: '0.5rem 0', pl: '1rem' }}>{comment}</Typography>
        </Box>
      </Box>
      {user._id === loggedInUserId && (
        <IconButton onClick={handleDeleteComment}>
          <DeleteIcon />
        </IconButton>
      )}
    </FlexBetween>
  );
}

export default Comment;
