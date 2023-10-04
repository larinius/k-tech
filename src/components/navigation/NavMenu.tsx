/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavLink } from 'react-router-dom';
import styles from './NavMenu.module.css';
import ServicesMenu from './ServicesMenu';

import React, { useState } from 'react';
import { Menu, MenuItem, Button, Paper, Popper, Grow, ClickAwayListener } from '@mui/material';

export default function NavMenu() {
  return (
    <div className="contents">
      <nav className={styles.navMenu}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'selected' : '')}
          style={({ isActive }) => {
            return {
              color: isActive ? '#0880AE' : '',
            };
          }}
        >
          Home
        </NavLink>

        <ServicesMenu />

        <NavLink
          to="#"
          className={({ isActive }) => (isActive ? 'selected' : '')}
          style={({ isActive }) => {
            return {
              color: isActive ? '#0880AE' : '',
            };
          }}
        >
          About
        </NavLink>

        <NavLink
          to="#"
          className={({ isActive }) => (isActive ? 'selected' : '')}
          style={({ isActive }) => {
            return {
              color: isActive ? '#0880AE' : '',
            };
          }}
        >
          Book now
        </NavLink>

        <NavLink
          to="#"
          className={({ isActive }) => (isActive ? 'selected' : '')}
          style={({ isActive }) => {
            return {
              color: isActive ? '#0880AE' : '',
            };
          }}
        >
          Shop
        </NavLink>

        <NavLink
          to="#"
          className={({ isActive }) => (isActive ? 'selected' : '')}
          style={({ isActive }) => {
            return {
              color: isActive ? '#0880AE' : '',
            };
          }}
        >
          Blog
        </NavLink>
        <NavLink
          to="#"
          className={({ isActive }) => (isActive ? 'selected' : '')}
          style={({ isActive }) => {
            return {
              color: isActive ? '#0880AE' : '',
            };
          }}
        >
          Contact
        </NavLink>
      </nav> 

    </div>
  );
}
