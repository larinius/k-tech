import React from 'react';
import { Typography, Container, Stack } from '@mui/material';
import { Post } from '@/interfaces/postInterface';
import PostThumbnail from './PostThumbnail';

const LatestPosts = ({ posts }: { posts: Post[] }) => {
  const latestPosts = posts.slice(-3);

  return (
    <Container sx={{}}>
      <Stack direction="column">
        <Typography variant="h2">Latest Posts</Typography>
        {latestPosts.map((post) => (
          <PostThumbnail key={post.id} post={post} />
        ))}
      </Stack>
    </Container>
  );
};

export default LatestPosts;
