import React, { useState } from 'react';
import { Container, Grid, Box } from '@mui/material';
import { usePosts } from '@/hooks/apiHooks';
import PostPanel from '@/components/posts/PostPanel';
import { getRandomElementsFromArray } from '@/utils/postsUtils';
import LatestPosts from '@/components/posts/LatestPosts';
import PostPanelWide from '@/components/posts/PostPanelWide';
import PostGridItem from '@/components/posts/PostGridItem';
import PostPagination from '@/components/pagination/PostPagination';

const Home = () => {
  const { posts } = usePosts(); // array of posts
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const featuredPosts = getRandomElementsFromArray(posts, 2);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const postsToDisplay = posts.slice(startIndex, endIndex);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const postGrid = (
    <Grid container spacing={2} sx={{ p: 0, my: 2 }}>
      {postsToDisplay.map((post, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} sx={{ p: 0 }}>
          <PostGridItem post={post} />
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} sx={{ px: 0, my: 1 }}>
          {featuredPosts !== undefined ? <PostPanel post={featuredPosts[0]} /> : <p>No posts available</p>}
        </Grid>
        <Grid item xs={12} md={4} sx={{ px: 0, my: 1, pl: 2 }}>
          <LatestPosts posts={posts} />
        </Grid>
        <Grid item xs={12}>
          {featuredPosts !== undefined ? <PostPanelWide post={featuredPosts[1]} /> : <p>No posts available</p>}
        </Grid>
      </Grid>

      {postGrid}

      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <PostPagination
          currentPage={currentPage}
          totalPages={Math.ceil(posts.length / postsPerPage)}
          onChange={handlePageChange}
        />
      </Box>
    </Container>
  );
};

export default Home;
