import React, { useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { Post } from '@/interfaces/postInterface';
import moment from 'moment';

const PostThumbnail = ({ post }: { post: Post }) => {
  const [hovered, setHovered] = useState(false);

  const createDate = moment(post?.createdAt).format('MMM D, YYYY');
  const imagePath = `${import.meta.env.VITE_APP_IMAGES_PATH}/${post?.header_image || 'placeholder.jpg'}`;

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '129px',
          backgroundImage: `url(${imagePath})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginBottom: '7px',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: hovered ? 'rgba(8, 128, 174, 0.8)' : 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            padding: '16px',
          }}
        >
          <Typography variant="h6" style={{ color: '#fff', fontSize: '18px' }}>
            {post.title}
          </Typography>
          <Grid container alignItems="center" style={{ color: '#fff', marginTop: '8px' }}>
            <Grid item>
              <Typography variant="caption" style={{ fontSize: '12px' }}>
                {createDate}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default PostThumbnail;
