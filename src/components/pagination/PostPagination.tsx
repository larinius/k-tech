import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PostPaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const PostPagination: React.FC<PostPaginationProps> = ({ currentPage, totalPages, onChange }) => {
  const displayRange = 3;
  const start = Math.max(1, currentPage - displayRange);
  const end = Math.min(totalPages, currentPage + displayRange);

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  const renderEllipsis = () => {
    if (currentPage + displayRange < totalPages) {
      return <span>...</span>;
    }
    return null;
  };

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Pagination
        color="primary"
        // variant="outlined"
        size="large"
        count={totalPages}
        page={currentPage}
        onChange={onChange}
        hidePrevButton 
        hideNextButton
        boundaryCount={2}
        siblingCount={2} 

      />
      {currentPage > displayRange + 1 && (
        <>
          <span>1</span>
          {renderEllipsis()}
        </>
      )}
    </Stack>
  );
};

export default PostPagination;
