import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, Grid, Link, ListItem, ListItemText, Stack, Typography } from '@mui/material';

import LogoDark from '@/components/navigation/LogoDark';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Typography className={styles.sectionTitle}>Departments</Typography>
            <ListItem className={styles.contactInfo}>
              <Link href="#">Medical</Link>
            </ListItem>
            <ListItem className={styles.contactInfo}>
              <Link href="#">Pharmaceuticals</Link>
            </ListItem>
            <ListItem className={styles.contactInfo}>
              <Link href="#">Medical Equipment</Link>
            </ListItem>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography className={styles.sectionTitle}>Quick Links</Typography>
            <ListItem className={styles.contactInfo}>
              <Link href="#">What do we do?</Link>
            </ListItem>
            <ListItem className={styles.contactInfo}>
              <Link href="#">Our expertise</Link>
            </ListItem>
            <ListItem className={styles.contactInfo}>
              <Link href="#">Request an Appointment</Link>
            </ListItem>
            <ListItem className={styles.contactInfo}>
              <Link href="#">Book with a Specialist</Link>
            </ListItem>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography className={styles.sectionTitle}>Head Office</Typography>
            <Box>
              <ListItem className={styles.contactInfo}>
                <LocationOnIcon style={{ color: '#fff', fontSize: '16px', marginRight: '10px' }} />

                <ListItemText
                  primary={
                    <Typography style={{ fontSize: '14px' }}>
                      <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
                    </Typography>
                  }
                />
              </ListItem>

              <ListItem className={styles.contactInfo}>
                <MailOutlineIcon style={{ color: '#fff', fontSize: '16px', marginRight: '10px' }} />

                <ListItemText
                  primary={
                    <Typography variant="body2">
                      <Link href="mailto:info@BottlesWaiting.com" sx={{ color: '#ffb400' }}>
                        darrell@mail.com
                      </Link>
                    </Typography>
                  }
                />
              </ListItem>

              <ListItem className={styles.contactInfo}>
                <PhoneIcon style={{ color: '#fff', fontSize: '16px', marginRight: '10px' }} />

                <ListItemText
                  primary={
                    <Typography>
                      <span>(671) 555-0110</span>
                    </Typography>
                  }
                />
              </ListItem>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box>
              <Stack gap={1}>
                <LogoDark />
                <Typography variant="body2" style={{ fontSize: '14px', lineHeight: '28px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit tincidunt ut sed. Velit euismod
                  integer convallis ornare eu
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <Typography mt={2} textAlign="start" style={{ fontSize: '14px' }}>
          ©2021 All Rights Reserved
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
