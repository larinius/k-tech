import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Stack, Toolbar, Typography, useTheme } from '@mui/material';
import { useState } from 'react';

import styles from './HeaderBar.module.css';

import Logo from './Logo';

import NavMenu from './NavMenu';

const HeaderBar = () => {
  const theme = useTheme();

  return (
    <>
      <AppBar
        position="static"
        className={styles.headerBar}
        sx={{ backgroundColor: theme.palette.secondary.main, borderRadius: '4px' }}
      >
        <Toolbar disableGutters>
          <Box sx={{ alignItems: 'center', display: 'flex', flexGrow: 1 }}>
            <div className={styles.logoContainer}>
              <Logo />
            </div>
            <Box sx={{ display: { md: 'flex', xs: 'none' }}} className={styles.phone}>
              <Stack gap={1}>
                <Typography className={styles.smallText}>Need Help?</Typography>

                <Typography className={styles.number}>(514) 543-9936</Typography>
              </Stack>
            </Box>

            <Box sx={{ display: { md: 'flex' }, flexGrow: 0 }}>
              <NavMenu />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HeaderBar;
