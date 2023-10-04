/* eslint-disable @typescript-eslint/no-unused-vars */
import { Accordion } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; 
import React from 'react';
import { NavLink } from 'react-router-dom';

const services = ['Service A', 'Service B', 'Service C', 'Service D'];

const ServicesMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
 <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          '&:hover': {
            color: '#0880AE',
            backgroundColor: 'white',
          },
          background: 'none',
          border: 'none',
          borderRadius: 0,
          color: '#252525',
          cursor: 'pointer',
          flexGrow: 1,
          font: 'inherit',
          padding: 1,
          textDecoration: 'none',
          textTransform: 'inherit',
          display: 'flex', 
          alignItems: 'center', 
        }}
      >
        Services
        <ArrowDropDownIcon /> {/* Add the chevron icon here */}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          sx: {
            paddingBottom: 0,
            paddingTop: 0,
            backgroundColor: 'white', 
          },
        }}
        sx={{
          '& .MuiAccordion-root': {
            backgroundColor: '#fff',
          },
          '& .MuiMenuItem-root': {
            color: '#252525',
            '&:hover': {
              color: '#0880AE',
              backgroundColor: 'white', 
            },
          },
          '& .menu-link': {
            textDecoration: 'none',
            color: '#252525',
            '&:hover': {
              color: '#0880AE',
            },
          },
        }}
      >
        {services.map((service, index) => {
          return (
            <Accordion key={index} square={true}>
              <MenuItem onClick={handleClose} className="menuItem">
                <NavLink
                  to={`#`}
                  className="menu-link"
                >
                  {service}
                </NavLink>
              </MenuItem>
            </Accordion>
          );
        })}
      </Menu>
    </>
  );
};

export default ServicesMenu;
