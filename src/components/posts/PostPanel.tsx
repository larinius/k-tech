import React from 'react';

import { AccessTime } from '@mui/icons-material';
import { Grid, Typography, Box } from '@mui/material';
import { Post } from '@/interfaces/postInterface';
import { useCategories, useUsers } from '@/hooks/apiHooks';
import moment from 'moment';
import { calculateReadingTime } from '@/utils/postsUtils';

const PostPanel = ({ post }: { post: Post }) => {
  const { categories } = useCategories();
  const { users } = useUsers();

  const createDate = moment(post?.createdAt).format('MMM D, YYYY');
  const category = categories.find((cat) => cat.id === post?.categoryId);
  const user = users.find((u) => u.id === post?.author);
  const readingTime = calculateReadingTime(post?.content);

  const imagePath = `${import.meta.env.VITE_APP_IMAGES_PATH}/${post?.header_image || 'placeholder.jpg'}`;

  return (
    <>
      <Box
        style={{ padding: '0', display: 'flex', alignItems: 'center', backgroundColor: '#F5F5F5', height: '432px' }}
      >
        <Grid item xs={6} style={{ width: '100%', height: '100%' }}>
          <img src={imagePath} alt="Blog Post Header" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Grid>

        <Grid item xs={6} style={{ paddingLeft: '16px', paddingRight: '16px', width: '100%', height: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '100%' }}>
            <Typography variant="subtitle1" style={{ fontWeight: '700', color: '#0880AE' }}>
              {category?.categoryName || ''}
            </Typography>
            <Typography variant="h5" gutterBottom style={{ fontWeight: '500', fontSize: 22 }}>
              {post?.title}
            </Typography>

            <Typography variant="body1" paragraph>
              {post?.content.substring(0, 370)}...
            </Typography>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <Typography variant="caption" style={{ color: '#727272' }}>
                  {createDate}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="caption"
                  style={{ color: '#0880AE' }}
                >{`${user?.firstname} ${user?.lastname}`}</Typography>
              </Grid>
              <Grid item>
                <AccessTime fontSize="small" style={{ color: '#727272' }} />
              </Grid>
              <Grid item>
                <Typography variant="caption" style={{ color: '#727272' }}>
                  {readingTime}
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Box>
    </>
  );
};

export default PostPanel;
